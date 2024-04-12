import { User, getServerSession } from 'next-auth'

export const session = async ({ session, token }) => {
  session.user.id = token.id
  return session
}

export const getUserSession = async () => {
  const authUserSession = await getServerSession({
    callbacks: {
      session,
    },
  })
  // if (!authUserSession) throw new Error('unauthorized')
  return authUserSession?.user
}

  
  export const user = await getUserSession();