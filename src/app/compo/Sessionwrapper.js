'use client'
import { SessionProvider } from "next-auth/react"

export default function Sessionwrapper({children}) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}
