'use client'
import Image from "next/image"

import { LoginComp } from "./login-comp"
import { signIn } from "next-auth/react"

export default function Dashboard() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <LoginComp/>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/deaf9768-7ff8-4e42-8ff3-6a9ada92bc1a/original=true/00000-5487217791733416.jpeg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover  "
        />
      </div>
    </div>
  )
}
