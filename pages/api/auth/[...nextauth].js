import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import {
  NEXT_PUBLIC_GITHUB_CLIENT_ID,
  NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
} from 'config'

export default NextAuth({
  // Configure one or more authentication providers
  debug: true,
  session: {},
  jwt: {},

  providers: [
    GitHubProvider({
      clientId: NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
})
