// import { NextResponse } from "next/server";

// import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  // 1. /list
  //   if (request.nextUrl.pathname.startsWith("/list")) {
  //     console.log("current time : " + new Date());
  //     console.log("OS : " + request.headers.get("sec-ch-ua-platform"));
  //     return NextResponse.next(); // *essential middleware
  //   }

  // 2. /wrtie
  //   if (request.nextUrl.pathname.startsWith("/write")) {
  //     const session = await getToken({ req: request });
  //     console.log("Session", session);
  //     if (session === null) {
  //       return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  //     }
  //   }

  // 3. Cookie: print, existence, delete
  // request.cookies.get("cookieName");
  // request.cookies.has("cookieName");
  // request.cookies.delete("cookieName");

  // 3-1. generate cookie
  // const response = NextResponse.next();
  // response.cookies.set({
  //   name: "mode",
  //   value: "dark",
  //   maxAge: 3600,
  //   httpOnly: true,
  // });
  // return response;

  // 4. /register
  if (request.nextUrl.pathname.startsWith("/user/join")) {
    if (request.cookies.has("visited") === false) {
      const response = NextResponse.next();
      response.cookies.set({
        name: "visited",
        visited: "true",
        maxAge: 3600,
      });
      console.log("======cookie=====");
      console.log(response);
      return response;
    }
    return NextResponse.next();
  }

  // 1. GET/POST 요청 시 (유저)
  // 2. 미들웨어 실행
  // 3. 서버 코드 실행
  // console.log("======nextUrl======");
  // console.log(request.nextUrl);
  // console.log("======cookies======");
  // console.log(request.cookies);
  // console.log("======headers======");
  // console.log(request.headers);
  // console.log(request.headers.get("user-agent"));
  // headers
  // 이전 방문 페이지, 사용 중인 OS, 브라우저, 선호 언어, IP, 쿠키
  // NextResponse.next(); // 통과
  // NextResponse.redirect(); // 다른 페이지 강제 이동: 주소창 변경
  // NextResponse.rewrite(); // 다른 페이지 강제 이동: 주소창 유지
}
