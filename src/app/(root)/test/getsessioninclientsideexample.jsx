// 'use server'
// // import user from "@/lib/user"
// import getuser from "./getuser"


// export  async function GET() {
//   return Response.json(getuser())
// }


// // export default function test() {
// //   return (
// //     <div>
// //       {JSON.stringify(getuser())}
// //     </div>
// //   )
// // }
'use client';
import { signOut, useSession } from 'next-auth/react';

function YourComponent() {
    const {data: session, status } = useSession();

    // You can use session to conditionally render content
    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    if (!session) {
        return (
            <div>
                You are not logged in. Please{' '}
                <a href="/api/auth/signin">sign in</a>
            </div>
        );
    }

    // If session exists, you can access session.user, session.accessToken, etc.
    return (
        <div>
            Welcome, {session.user.name}! {/* Or whatever user data you want to display */}
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    );
}

export default YourComponent;
