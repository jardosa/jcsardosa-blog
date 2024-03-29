import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const appCookies = cookies()
  const authToken = appCookies.get('authToken')?.value
  if (!authToken)
    return NextResponse.redirect(new URL('/login', request.url))

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - login route
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|login|logout|_next/static|_next/image|favicon.ico).*)',
  ]
}