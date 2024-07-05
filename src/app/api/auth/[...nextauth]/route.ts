import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcryptjs";
import { db } from "@/db";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        console.log(credentials);
        const user = await db.user.findUnique({
          where: { email: credentials?.email },
        });

        // console.log(user);

        if (!user) return null;

        console.log(bcrypt.hashSync(credentials!.password, 10));

        if (user.password) {
          const isPasswordValid = await bcrypt.compare(
            credentials!.password,
            user.password
          );

          if (!isPasswordValid) return null;
        }

        return { id: user.id, email: user.email };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
