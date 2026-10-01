import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "./auth.config";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const parsed = credentialsSchema.safeParse(credentials);
        const bishopricEmail = process.env.BISHOPRIC_EMAIL?.trim().toLowerCase();
        const passwordHash = process.env.BISHOPRIC_PASSWORD_HASH;

        if (
          !parsed.success ||
          !bishopricEmail ||
          !passwordHash ||
          !/^\$2[aby]\$\d{2}\$/.test(passwordHash) ||
          parsed.data.email.toLowerCase() !== bishopricEmail
        ) {
          return null;
        }

        const passwordMatches = await bcrypt.compare(
          parsed.data.password,
          passwordHash,
        );

        if (!passwordMatches) {
          return null;
        }

        return {
          id: "bishopric",
          name: "Bishopric",
          email: bishopricEmail,
        };
      },
    }),
  ],
});