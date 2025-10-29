import { NextResponse } from "next/server";

export function middleware(request: Request) {
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.rewrite(new URL("/", request.url));
  }
}

// export const config = {
//   matcher: "/profile",
// };
