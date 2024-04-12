import { session } from '../../../sessions'
// import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from "next-auth/providers/github"
import prisma from '../../../../../prisma'


const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

const authOption = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error('No profile');
      }
    
      // Generate a base username from the name (remove spaces and convert to lowercase)
      let baseUsername = profile.name.replace(/\s+/g, '').toLowerCase();
      let username = baseUsername;
      let usernameExists = true;
      let counter = 1;
    
      // Check if the generated username already exists
      while (usernameExists) {
        const existingUser = await prisma.user.findFirst({
          where: {
            username,
          },
        });
    
        if (!existingUser) {
          usernameExists = false;
        } else {
          // If username already exists, append a counter to make it unique
          username = `${baseUsername}${counter}`;
          counter++;
        }
      }
    
      // Generate a temporary password for now (you should handle password securely in production)
      const password = Math.random().toString(36).slice(-8); // Temporary password
    
      await prisma.user.upsert({
        where: {
          email: profile.email,
        },
        create: {
          email: profile.email,
          name: profile.name,
          username, // Use the generated unique username
          password, // Temporary password
          avatar: profile.image,
        },
        update: {
          name: profile.name,
          avatar: profile.image,
        },
      });
    
      return true;
    }
    
    ,
    session,
    async jwt({ token, user, account, profile }) {
      if (profile) {
        const user = await prisma.user.findUnique({
          where: {
            email: profile.email,
          },
        })
        if (!user) {
          throw new Error('No user found')
        }
        token.id = user.id
      }
      return token
    },
  },
}

const handler = NextAuth(authOption)
export { handler as GET, handler as POST }