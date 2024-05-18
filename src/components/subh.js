"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Subh() {
    
  const pathname = usePathname();
  let videoroute = "true"
  let subh = pathname.split('/')[1];
  (pathname.split('/')[1] == "videos" || pathname.split('/')[1] == "watch") && (subh = "videos");

    return (
    <span>
      {
              videoroute && (
                <>
                <span className="hidden sm:inline">

                <span> | </span>
                <Link href={"/"+subh}>
                <span>{subh} <span className=" text-blue-500"> {pathname}</span></span>
                </Link>
                </span>
                </>
              )
            }
    </span>
  )
}
