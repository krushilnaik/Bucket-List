import NextAuth from "next-auth"
import AppleProvider from "next-auth/providers/apple"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"

export default NextAuth({
  session: {
    jwt: true
  },
  secret: process.env.SECRET,
  providers: [
    // OAuth authentication providers
    Provider.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
    Provider.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Provider.Facebook({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      }),
    Provider.Github({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
      }),

    // Sign in with passwordless email link
    EmailProvider({
      server: process.env.MAIL_SERVER,
      
      from: "<no-reply@example.com>",
    }),
  ],
})