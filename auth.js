
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import axios from "axios"
import { cookies } from "next/headers"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google, Facebook],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const provider = account?.provider
        const { data } = await axios({
          method: 'POST',
          url: 'http://localhost:5000/login',
          data: {
            name: user.name,
            email: user.email,
            image: user.image,
            provider: provider
          }
        })
        cookies().set('token', data.token)
        if (cookies().get('token')) {
          return true
        }
      } catch (error) {
        console.log(`Error from async signIn: ${error}`)
      }
    }
  }
})