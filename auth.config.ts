import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isProtected = nextUrl.pathname.startsWith("/meetings");

      if (isProtected && !auth?.user) {
        return false;
      }

      if (nextUrl.pathname === "/login" && auth?.user) {
        return Response.redirect(new URL("/meetings", nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;