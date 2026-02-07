import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function proxy(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  const accessTokenCookie = (await cookies()).get("accessToken");
  const token: string | null = accessTokenCookie
    ? accessTokenCookie.value
    : null;

  const isPublicPath: boolean =
    pathname === "/in/auth/login" || pathname === "/in/auth/signup";

  // If already logged in, block access to login/signup
  if (isPublicPath && token) {
    return NextResponse.redirect(`${origin}/in/spot/btcusdt`);
  }

  // If not logged in, block access to protected routes
  if (!isPublicPath && !token) {
    return NextResponse.redirect(`${origin}/in/auth/login`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/in/auth/login", "/in/auth/signup", "/in/spot/:pair*"],
};
