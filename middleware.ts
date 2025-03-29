import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Check if the request is for the admin section
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // In a real app, you'd check for a session cookie or token
    // For demo purposes, we'll use a simple query parameter
    const authToken = request.nextUrl.searchParams.get("token")

    if (authToken !== "demo-token") {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/admin-login", request.url))
    }
  }

  return NextResponse.next()
}

