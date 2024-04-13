import { getServerSession } from 'next-auth';

export const session = async ({ session, token }) => {
  session.user.id = token.id;
  return session;
};

export const getUserSession = async () => {
  try {
    const authUserSession = await getServerSession({
      callbacks: {
        session,
      },
    });
    return authUserSession?.user;
  } catch (error) {
    console.error('Error getting user session:', error);
    return null;
  }
};
