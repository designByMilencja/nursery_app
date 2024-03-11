import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import {IUser, User} from "@/models/user.model"

export const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email:", type: "text" },
        password: { label: "Hasło:", type: "password" },
      },
      async authorize(credentials: Record<"email" | "password", string> | undefined) {
        if (!credentials) return null

        const { password, email } = credentials
        try {
          const foundUser = (await User.findOne({
            email,
          })
              .lean()
              .exec()) as {
            _id: string
            name: string
            email: string
            role: string
            password: string
          }
          if (!foundUser) {
            return null
          }

          if (foundUser) {
            const match = await bcrypt.compare(password ?? "", foundUser.password)
            if (match) {
              console.log(foundUser._id)
              foundUser.password = ""
              return {
                id: foundUser?._id,
                name: foundUser?.name,
                email: foundUser?.email,
                role: foundUser?.role,
              }
            } else {
              return null
            }
          }
        } catch (e) {
          console.log(e)
        }
        return null
      }
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async signIn({user}) {
      const isVerifiedUser: IUser | null = await User.findOne({
        email: user?.email,
      })
      return !!isVerifiedUser?.isVerified;
    },

    async jwt({ token, user }) {
      if (user && "role" in user) {
        token.role = user.role
      }
      if (user && "id" in user) {
        token.id = user.id
      }

      return token
    },
    async session({ session, token }) {
      const newSession = {
        ...session,
        user: {
          ...session.user,
          role: token && "role" in token ? token.role : "",
          id: token && "id" in token ? token.id : ""
        },
      }
      return Promise.resolve(newSession)
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 10 * 24 * 60 * 60,
    updateAge: 2 * 24 * 60 * 60,
  },
}

