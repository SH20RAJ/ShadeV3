"use client";
import { signOut, useSession } from "next-auth/react";

function Logout() {
  const { data: session, status } = useSession();

  // You can use session to conditionally render content
  // if (loading) {
  //     return <div>Loading...</div>;
  // }

  if (!session) {
    return (
      <div className="textd  flex-center -mt-[200px]">
        You are not logged in. Please 
        <a className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href="/api/auth/signin">sign in</a>
      </div>
    );
  }

  // If session exists, you can access session.user, session.accessToken, etc.
  return (
    <div className="textd flex-center -mt-[200px]">
      Welcome, {session.user.name}!{" "}
      {/* Or whatever user data you want to display */}
      <br />
      <button 
      className="border mt-10 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900    " onClick={() => signOut()}>
        Sign out
      </button>
    </div>
  );
}

export default Logout;
