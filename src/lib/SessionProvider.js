'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'


export default function NextAuthSessionProvider({children}) {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}
