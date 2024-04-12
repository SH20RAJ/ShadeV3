'use client'
import { useSession } from "next-auth/react"

export default function Page() {
  const { data: session, status, update } = useSession()

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {session.user.name}</p>

        {/* Update the value by sending it to the backend. */}
        <button onClick={() => update({ name: "John Doe" })}>Edit name</button>
        {/*
         * Only trigger a session update, assuming you already updated the value server-side.
         * All `useSession().data` references will be updated.
         */}
        <button onClick={() => update()}>Edit name</button>
      </>
    )
  }

  return <a href="/api/auth/signin">Sign in</a>
}