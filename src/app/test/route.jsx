// Import getSession from next-auth/react
import { getSession } from "next-auth/react";
import getuser from "./getuser";

export async function handler(req, res) {
  // Get the session from the request
  const session = await getSession()
  let user = await getuser();
  console.log(user); 

  if (true) {
    // If session exists, respond with a message or user information
    return Response.json(
      user.user
    );
  } 
}
export { handler as GET}

// // 'use client'
// import user from "@/lib/user"
// import { getSession } from "next-auth/react";
// import { useSession } from 'next-auth/react';

// // import getuser from "./getuser"


// // export async function GET(req) { try { const session = await getSession({ req }); return  Response.json(session); } catch (error) { throw new Error("Something went wrong."); } }

// export  async function GET() {
//     const {data: session, status } = useSession();

//   return Response.json(session)
// }


// export default function test() {
//   return (
//     <div>
//       {JSON.stringify(getuser())}
//     </div>
//   )
// }
// 'use client';
// import { useSession } from 'next-auth/react';

// function YourComponent() {
//     const {data: session, status } = useSession();

//     // You can use session to conditionally render content
//     // if (loading) {
//     //     return <div>Loading...</div>;
//     // }

//     if (!session) {
//         return (
//             <div>
//                 You are not logged in. Please{' '}
//                 <a href="/api/auth/signin">sign in</a>
//             </div>
//         );
//     }

//     // If session exists, you can access session.user, session.accessToken, etc.
//     return (
//         <div>
//             Welcome, {session.user.name}! {/* Or whatever user data you want to display */}
//             <button onClick={() => signOut()}>Sign out</button>
//         </div>
//     );
// }

// export default YourComponent;
