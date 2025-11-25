import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Disable built-in optimization to avoid runtime 500s from the image optimizer
    unoptimized: true,
  },
  // Security headers (recommended but not critical)
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/:path*',
        headers: [
          // Prevents clickjacking attacks by controlling if your site can be embedded in frames
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Prevents MIME type sniffing attacks
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Enables XSS protection in older browsers
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Controls which referrer information is sent with requests
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Restricts which permissions/features the browser can use
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Content Security Policy - helps prevent XSS attacks by controlling resource loading
          // Note: You may need to adjust this based on your specific needs (external scripts, styles, etc.)
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'", // Adjust based on your needs
              "style-src 'self' 'unsafe-inline'", // Adjust based on your needs
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self'",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
