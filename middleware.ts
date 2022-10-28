import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
// aca puede ser cualquier cosa de la url
  const flag =new URLSearchParams(request.nextUrl.search).get(
    "collection_status"
  );

  if (
    (request.nextUrl.pathname === "/Success" && !flag) ||
    (request.nextUrl.pathname === "/Pending" && !flag)
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

}


