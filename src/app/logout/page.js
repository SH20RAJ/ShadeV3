'use client'
import { signOut } from 'next-auth/react'; // If not using React
import { redirect } from 'next/navigation'
 const handleSignOut = async () => {
  await signOut({ redirect: true, callbackUrl: "/" });
//   alert('Sign out')
// redirect('/login')

};

handleSignOut()

export default function page() {
    return (
        <>
        ...
        </>
    )
}
