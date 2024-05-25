// middleware.js

const { NextResponse } = require('next/server');
const { RateLimiterMemory } = require('rate-limiter-flexible');

// Initialize the rate limiter
const rateLimiter = new RateLimiterMemory({
  points: 1, // Number of points
  duration: 10, // Per second
});

async function middleware(request) {
  try {
    // Consume a point for each request
    await rateLimiter.consume(request.ip);

    // If successful, proceed with the request
    return NextResponse.next();
  } catch (rateLimiterRes) {
    // If rate limit is exceeded, send a 429 response
    return new NextResponse('Too many requests', { status: 429 });
  }
}

// Specify the paths that will use this middleware
export const config = {
  matcher: '/api/:path*',
};
export default middleware;