#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script compresses PNG and JPEG images in the public/images directory
 * using sharp. It creates optimized versions while preserving quality.
 * 
 * Usage: npm run optimize-images
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const MAX_WIDTH = 2560; // Maximum width for images (reduced from 3840 for better compression)
const QUALITY = 80; // JPEG/WebP quality (0-100) - reduced for better compression
const PNG_COMPRESSION = 9; // PNG compression level (0-9)

// File size thresholds (in bytes)
const TARGET_MAX_SIZE = 1024 * 1024; // 1MB target max
const WARN_SIZE = 2 * 1024 * 1024; // 2MB warning threshold
const AGGRESSIVE_THRESHOLD = 3 * 1024 * 1024; // 3MB - use more aggressive settings

async function getImageFiles(dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getImageFiles(fullPath));
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

async function getFileSize(filePath) {
  const stats = await fs.stat(filePath);
  return stats.size;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

async function optimizeImage(inputPath) {
  const originalSize = await getFileSize(inputPath);
  const ext = path.extname(inputPath).toLowerCase();
  const isPNG = ext === '.png';
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Skip if already small enough
    if (originalSize < TARGET_MAX_SIZE && metadata.width <= MAX_WIDTH) {
      return {
        path: inputPath,
        originalSize,
        newSize: originalSize,
        optimized: false,
        reason: 'Already optimized',
      };
    }
    
    // Use more aggressive settings for very large files
    const useAggressive = originalSize > AGGRESSIVE_THRESHOLD;
    const targetWidth = useAggressive ? 1920 : MAX_WIDTH;
    const targetQuality = useAggressive ? 75 : QUALITY;
    
    // Create backup and temp paths
    const backupPath = inputPath + '.backup';
    const tempPath = inputPath + '.tmp';
    
    // Backup original
    await fs.copyFile(inputPath, backupPath);
    
    let pipeline = image.resize(targetWidth, null, {
      withoutEnlargement: true,
      fit: 'inside',
    });
    
    // Write to temporary file first (Sharp can't write to same file it's reading)
    if (isPNG) {
      // Optimize PNG - use more aggressive compression for large files
      const compressionLevel = useAggressive ? 9 : PNG_COMPRESSION;
      await pipeline
        .png({ compressionLevel, adaptiveFiltering: true, palette: useAggressive })
        .toFile(tempPath);
    } else {
      // Optimize JPEG
      await pipeline
        .jpeg({ quality: targetQuality, mozjpeg: true })
        .toFile(tempPath);
    }
    
    const newSize = await getFileSize(tempPath);
    
    // More lenient threshold - accept if we save at least 2%
    if (newSize >= originalSize * 0.98) {
      await fs.unlink(tempPath);
      await fs.unlink(backupPath);
      return {
        path: inputPath,
        originalSize,
        newSize: originalSize,
        optimized: false,
        reason: 'Optimization did not reduce size significantly',
      };
    }
    
    // Replace original with optimized version
    await fs.rename(tempPath, inputPath);
    
    // Remove backup if optimization was successful
    await fs.unlink(backupPath);
    
    return {
      path: inputPath,
      originalSize,
      newSize,
      optimized: true,
      savings: originalSize - newSize,
    };
  } catch (error) {
    // Clean up any temporary files
    const tempPath = inputPath + '.tmp';
    const backupPath = inputPath + '.backup';
    try {
      await fs.unlink(tempPath).catch(() => {});
      // Restore backup if it exists
      if (await fs.access(backupPath).then(() => true).catch(() => false)) {
        await fs.copyFile(backupPath, inputPath);
        await fs.unlink(backupPath);
      }
    } catch (cleanupError) {
      // Ignore cleanup errors
    }
    
    return {
      path: inputPath,
      originalSize,
      newSize: originalSize,
      optimized: false,
      error: error.message,
    };
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  
  if (!require('fs').existsSync(IMAGES_DIR)) {
    console.error(`❌ Images directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }
  
  const imageFiles = await getImageFiles(IMAGES_DIR);
  
  if (imageFiles.length === 0) {
    console.log('ℹ️  No images found to optimize.');
    return;
  }
  
  console.log(`Found ${imageFiles.length} images to process.\n`);
  
  const results = [];
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let optimizedCount = 0;
  
  for (let i = 0; i < imageFiles.length; i++) {
    const file = imageFiles[i];
    const relativePath = path.relative(process.cwd(), file);
    process.stdout.write(`[${i + 1}/${imageFiles.length}] Processing ${relativePath}... `);
    
    const result = await optimizeImage(file);
    results.push(result);
    totalOriginalSize += result.originalSize;
    totalNewSize += result.newSize;
    
    if (result.optimized) {
      optimizedCount++;
      const savings = ((result.savings / result.originalSize) * 100).toFixed(1);
      console.log(`✓ Saved ${formatBytes(result.savings)} (${savings}%)`);
    } else {
      console.log(`⊘ ${result.reason || 'Skipped'}`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 Optimization Summary');
  console.log('='.repeat(60));
  console.log(`Total images processed: ${imageFiles.length}`);
  console.log(`Images optimized: ${optimizedCount}`);
  console.log(`Original total size: ${formatBytes(totalOriginalSize)}`);
  console.log(`New total size: ${formatBytes(totalNewSize)}`);
  console.log(`Total savings: ${formatBytes(totalOriginalSize - totalNewSize)}`);
  console.log(`Space saved: ${(((totalOriginalSize - totalNewSize) / totalOriginalSize) * 100).toFixed(1)}%`);
  
  // List large files that still need attention
  const largeFiles = results.filter(r => r.newSize > WARN_SIZE);
  if (largeFiles.length > 0) {
    console.log('\n⚠️  Large files (>2MB) that may need manual optimization:');
    largeFiles.forEach(file => {
      console.log(`   ${path.relative(process.cwd(), file.path)}: ${formatBytes(file.newSize)}`);
    });
  }
  
  console.log('\n✅ Optimization complete!');
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

