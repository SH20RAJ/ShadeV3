// app/middleware.js

import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'no-store, max-age=0');
  return response;
}
