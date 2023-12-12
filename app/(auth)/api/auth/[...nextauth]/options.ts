import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { User } from "@/models/User";

// export interface JWT {
//   role: string;
// }

// export interface UserProfile {
//   id: string;
//   email: string;
//   employee: boolean;
//   sub: string;
//   role: string;
// }

// export interface Session {
//   user: UserProfile;
// }

export const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email:", type: "text" },
        password: { label: "Hasło:", type: "password" }
      },
      async authorize(credentials) {
        const {password, email} = credentials
        try {
          const foundUser = await User.findOne({
            email
          }).lean().exec();
          if (!foundUser) {
            return null;
          }
          if (foundUser) {
            const match = await bcrypt.compare(password, foundUser?.password);
            if (match) {
              delete foundUser?.password;
              return {
                id: foundUser?._id,
                name: foundUser?.name,
                email: foundUser?.email,
                role: foundUser?.role
              };
            } else {
              return null;
            }
          }
        } catch (e) {
          console.log(e);
        }
        return null;
      }
    }),
  ],
  pages: {
    signIn: "/sign-in"
  },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) (token as JWT).role = (user as UserProfile).role;
//       return token;
//     },
//     async session({ session, token }) {
//       if (session?.user) (session as Session).user.role = (token as JWT).role;
//       return session;
//     }
//   },
  session: {
    strategy: "jwt",
    maxAge: 10 * 24 * 60 * 60,
    updateAge: 2 * 24 * 60 * 60
  },
};
