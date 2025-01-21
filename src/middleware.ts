import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Define restricted routes
  const protectedRoutes = ['/cart', '/checkout', '/wishList'];

  // Check if the user is trying to access a restricted route
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    // Check for user authentication token in cookies
    const userCookie = request.cookies.get('user'); // Ensure this matches the key used in your login

    if (!userCookie) {
      // Redirect to login if not authenticated
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirectTo', pathname); // Optional: Add redirect query param
      return NextResponse.redirect(loginUrl);
    }
  }

  // Allow request to proceed
  return NextResponse.next();
}
