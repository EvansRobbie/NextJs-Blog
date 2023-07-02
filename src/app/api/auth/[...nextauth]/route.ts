import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.Google_ID as string,
      clientSecret: process.env.Google_SECRET as string,
    }),
    // ...add more providers here
  ],
})
export {handler as GET, handler as POST}