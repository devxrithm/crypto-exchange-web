import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function proxy(request) {
  const { pathname, origin } = request.nextUrl;

  const accessTokenCookie = (await cookies()).get("accessToken");
  const token = accessTokenCookie ? accessTokenCookie.value : null;
  // const token = request.cookies.get("accessToken")?.value || null;

  // console.log(token);

  const isPublicPath =
    pathname === "/auth/login" || pathname === "/auth/signup";

  // If already logged in, block access to login/signup
  if (isPublicPath && token) {
    return NextResponse.redirect(`${origin}/in/spot/btcusdt`);
  }

  // If not logged in, block access to protected routes
  if (!isPublicPath && !token) {
    return NextResponse.redirect(`${origin}/auth/login`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login", "/auth/signup", "/in/spot/:pair*"],
};
