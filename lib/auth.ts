import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

declare module "next-auth/jwt" { interface JWT { accessToken?: string; login?: string } }
declare module "next-auth" { interface Session { accessToken?: string; login?: string } }

export const authOptions: NextAuthOptions = {
  providers: [GitHubProvider({ clientId: process.env.GITHUB_ID!, clientSecret: process.env.GITHUB_SECRET!, authorization: { params: { scope: "read:user repo" } } })],
  callbacks: {
    async signIn({ profile }) { return (profile as { login?: string }).login === (process.env.ADMIN_GITHUB_LOGIN || "SebasHdez2006"); },
    async jwt({ token, account, profile }) { if (account) token.accessToken = account.access_token; if (profile) token.login = (profile as { login?: string }).login; return token; },
    async session({ session, token }) { session.accessToken = token.accessToken; session.login = token.login; return session; }
  }
};
