'use client'
import { signOut } from 'next-auth/react'; // If not using React
import { redirect } from 'next/navigation'
 const handleSignOut = async () => {
  await signOut({ redirect: false, callbackUrl: "/" });
  alert('Sign out')
// redirect('/login')

};
export default function page() {
    return (
        <>
        ...
        <button onClick={handleSignOut}>Sign Out</button>
        </>
    )
}
