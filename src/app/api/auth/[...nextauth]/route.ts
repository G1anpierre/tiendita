import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const handler = NextAuth({
  // Configure one or more authentication providers
  debug: true,
  session: {
    strategy: 'jwt',
  },
  jwt: {},
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.OAUTH_CLIENT_ID || '',
      clientSecret: process.env.OAUTH_CLIENT_SECRET || '',
    }),
    // ...add more providers here
  ],
})

export {handler as GET, handler as POST}
