import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  // Get auth state from localStorage in a real app
  // For demo, we'll allow all access
  return NextResponse.next()
}