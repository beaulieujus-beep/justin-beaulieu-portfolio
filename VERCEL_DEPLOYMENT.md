# Vercel Deployment Guide

This guide will walk you through deploying your Next.js site to Vercel.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account (for connecting your repository)
- A Vercel account (free tier is sufficient)
- Your Resend API key (for contact form functionality)

## Step 1: Prepare Your Repository

1. Make sure your code is committed and pushed to a Git repository (GitHub, GitLab, or Bitbucket)
2. Ensure your `package.json` has the correct build script (already configured)

## Step 2: Sign Up / Log In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Sign in with your GitHub, GitLab, or Bitbucket account (recommended for easy integration)

## Step 3: Import Your Project

1. Once logged in, click "Add New..." → "Project"
2. Import your Git repository
3. Vercel will automatically detect it's a Next.js project

## Step 4: Configure Environment Variables

Before deploying, you need to add your environment variables:

### Required Variables

1. **RESEND_API_KEY** (Required)
   - Get your API key from [Resend Dashboard](https://resend.com/api-keys)
   - This is required for the contact form to work

### Optional Variables (for Rate Limiting)

2. **UPSTASH_REDIS_REST_URL** (Optional)
   - Get this from [Upstash Console](https://console.upstash.com/)
   - Create a Redis database if you don't have one
   - Copy the REST URL

3. **UPSTASH_REDIS_REST_TOKEN** (Optional)
   - From the same Upstash Redis database
   - Copy the REST Token
   - Note: If these are not set, rate limiting will be disabled (the site will still work)

### How to Add Environment Variables in Vercel

1. In the project import screen, click "Environment Variables"
2. Add each variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key
   - **Environment**: Select "Production", "Preview", and "Development" (or just "Production" if you prefer)
3. Repeat for `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` if using rate limiting
4. Click "Add" for each variable

## Step 5: Deploy

1. Review the project settings:
   - **Framework Preset**: Should be "Next.js" (auto-detected)
   - **Root Directory**: Leave as `./` (unless your Next.js app is in a subdirectory)
   - **Build Command**: Should be `next build` (auto-detected)
   - **Output Directory**: Leave as default (auto-detected)
   - **Install Command**: Should be `npm install` (auto-detected)

2. Click "Deploy"

3. Wait for the build to complete (usually 1-3 minutes)

## Step 6: Verify Deployment

1. Once deployed, Vercel will provide you with a URL (e.g., `your-project.vercel.app`)
2. Visit the URL to verify your site is working
3. Test the contact form to ensure environment variables are configured correctly

## Step 7: Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain (e.g., `justinbeaulieu.com`)
4. Follow Vercel's instructions to configure DNS records

## Troubleshooting

### Contact Form Not Working
- Verify `RESEND_API_KEY` is set correctly in Vercel environment variables
- Check that the API key has the correct permissions in Resend
- Verify the "from" email domain is verified in Resend (for `contact@justinbeaulieu.com`)

### Build Errors
- Check the build logs in Vercel dashboard
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility (Vercel uses Node 18.x by default, which should work fine)

### Rate Limiting Not Working
- This is optional - the site will work without it
- If you want rate limiting, ensure both `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are set
- Verify your Upstash Redis database is active

## Continuous Deployment

Once connected, Vercel will automatically:
- Deploy new commits to your main branch to production
- Create preview deployments for pull requests
- Re-deploy when you push changes

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Resend Documentation](https://resend.com/docs)
- [Upstash Documentation](https://docs.upstash.com/)

