// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import * as bcrypt from "bcryptjs";
// import { db } from "@/db";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";

// const handler = NextAuth({
//   adapter: PrismaAdapter(db),
//   session: {
//     strategy: "jwt",
//     maxAge: 7 * 24 * 60 * 60, // 7 days
//   },
//   pages: {
//     signIn: "/login",
//   },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//     CredentialsProvider({
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req): Promise<any> {
//         const user = await db.user.findUnique({
//           where: { email: credentials?.email },
//         });

//         if (!user) return null;

//         if (user.password) {
//           const isPasswordValid = await bcrypt.compare(
//             credentials!.password,
//             user!.password as string
//           );

//           if (!isPasswordValid) return null;
//         }

//         return {
//           id: user.id,
//           username: user.name,
//           email: user.email,
//           roles: user.roles,
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     async session({ session, user, token }) {
//       session.user = token.user as {
//         id: number;
//         name?: string | null;
//         email?: string | null;
//         image?: string | null;
//         roles?: string[] | [];
//       };

//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.user = {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           image: user.image,
//           // role: user.r,
//         };
//       }
//       return token;
//     },
//   },
// });

// export { handler as GET, handler as POST };

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import * as bcrypt from "bcryptjs";
import { db } from "@/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const handler = NextAuth({
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await db.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!user) return null;

        if (user.password) {
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) return null;
        }

        return {
          id: user.id,
          username: user.name,
          email: user.email,
          roles: user.roles,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      session.user = token.user;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          // role: user.r,
        };
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
