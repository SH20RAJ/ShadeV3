import { signOut } from 'next-auth/react'; // If not using React
import { redirect } from 'next/navigation'
import NextAuth from 'next-auth'

 const handleSignOut = async () => {
  await signOut({ redirect: false, callbackUrl: "/" });
  alert('Sign out')
// redirect('/login')
};
handleSignOut()
export default function page() {
    return (
        <>
        </>
    )
}