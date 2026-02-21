import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(_req: NextRequest) {
  const res = NextResponse.next();

  // Allow this app to be embedded on your website
  res.headers.set(
    "Content-Security-Policy",
    "frame-ancestors 'self' https://calonlan.org.uk;"
  );

  // Remove legacy iframe blockers if present
  res.headers.delete("x-frame-options");
  res.headers.delete("X-Frame-Options");

  return res;
}

export const config = {
  matcher: "/:path*",
};
