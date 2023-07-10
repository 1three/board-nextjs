import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

    CredentialsProvider({
      // 1. Create login page-form
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      // 2. Check wrong email or Password
      async authorize(credentials) {
        let db = (await connectDB).db("forum");
        let user = await db
          .collection("register")
          .findOne({ email: credentials.email });
        if (!user) {
          console.log("Please JOIN us");
          return null;
        }
        const pwcheck = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!pwcheck) {
          console.log("Wrong Password");
          return null;
        }
        return user;
      },
    }),
  ],

  // 3. *Set jwt expiration date
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
    //4. Create jwt
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.name = user.name;
        token.user.email = user.email;
      }
      return token;
    },

    //5. every time user Session is queried
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },

  secret: process.env.AUTH_SECRET,
  adapter: MongoDBAdapter(connectDB),
  // sessions: current login user
  // users: join user's info
  // accounts: join user's account info
};

export default NextAuth(authOptions);
