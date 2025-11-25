import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Initialize Redis client with error handling
// For Vercel deployment, these will be set as environment variables
let redis: Redis | null = null;
let contactFormRateLimit: Ratelimit | null = null;

try {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  
  // Only initialize if both env vars are present
  if (redisUrl && redisToken) {
    redis = new Redis({
      url: redisUrl,
      token: redisToken,
    });

    // Create rate limiter: 3 requests per 15 minutes per IP
    contactFormRateLimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, '15 m'),
      analytics: true,
      prefix: '@upstash/ratelimit/contact',
    });
  } else {
    console.warn('Rate limiting disabled: UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN not set');
  }
} catch (error) {
  console.error('Failed to initialize rate limiter:', error);
  // Continue without rate limiting - fail open
}

// Export a function that safely uses the rate limiter
export async function checkRateLimit(ip: string) {
  if (!contactFormRateLimit) {
    // If rate limiting is not configured, allow all requests
    return { success: true, limit: 0, remaining: 0, reset: Date.now() };
  }
  
  try {
    return await contactFormRateLimit.limit(ip);
  } catch (error) {
    console.error('Rate limit check failed:', error);
    // Fail open - allow the request if rate limiting fails
    return { success: true, limit: 0, remaining: 0, reset: Date.now() };
  }
}

