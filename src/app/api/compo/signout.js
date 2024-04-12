'use client'
import { signOut } from 'next-auth/react'; // If not using React
 const handleSignOut = async () => {
  await signOut({ redirect: false, callbackUrl: "/" });
  alert('Sign out')
};

export default handleSignOut;