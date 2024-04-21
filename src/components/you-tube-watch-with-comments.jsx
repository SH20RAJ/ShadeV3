/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/JYRHaUCCmMt
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function YouTubeWatchWithComments() {
  return (
    (<div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-[1fr_300px]">
      <div className="flex flex-col">
        <header
          className="flex h-14 items-center justify-between border-b bg-gray-100/40 px-4 dark:bg-gray-800/40 lg:h-[60px]">
          <Link className="flex items-center gap-2" href="#">
            <YoutubeIcon className="h-6 w-6 text-red-500" />
            <span className="font-semibold">YouTube</span>
          </Link>
          <div className="relative flex-1 max-w-md">
            <SearchIcon
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full rounded-full bg-white px-8 py-2 shadow-none dark:bg-gray-950"
              placeholder="Search"
              type="search" />
          </div>
          <Avatar className="hidden h-8 w-8 border lg:flex">
            <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </header>
        <main className="flex-1 grid gap-6 p-4 md:p-6">
          <div className="rounded-xl overflow-hidden">
            <span className="w-full aspect-video rounded-md bg-muted" />
          </div>
          <div className="grid gap-4">
            <h1 className="text-xl font-semibold line-clamp-2">Vercel Ship Keynote: Introducing the frontend cloud</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img
                  alt="Thumbnail"
                  className="rounded-full object-cover aspect-square"
                  height={40}
                  src="/placeholder.svg"
                  width={40} />
                <div className="text-sm">
                  <div className="font-semibold">Vercel</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">70K subscribers</div>
                </div>
              </div>
              <Button size="sm" variant="outline">
                Subscribe
              </Button>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-sm dark:bg-gray-800">
              <p>
                Today, we're introducing the frontend cloud, where frontend developers build, test, and deploy
                high-quality web applications efficiently and quickly, all on Vercel.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <h2 className="font-semibold text-xl">110 Comments</h2>
            <div className="text-sm flex items-start gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="grid gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">@iamwillpursell</div>
                  <div className="text-gray-500 text-xs dark:text-gray-400">5 months ago</div>
                </div>
                <div>
                  I really love the ecosystem Vercel is creating. The way each component can be added and modified with
                  ease really makes these tools attractive.
                </div>
              </div>
            </div>
            <div className="text-sm flex items-start gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="grid gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">@HackSoft</div>
                  <div className="text-gray-500 text-xs dark:text-gray-400">2 months ago</div>
                </div>
                <div>
                  We are more than excited to leverage all the new stuff, building better products for our clients ✨
                </div>
              </div>
            </div>
            <div className="text-sm flex items-start gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="grid gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">@greed7513</div>
                  <div className="text-gray-500 text-xs dark:text-gray-400">6 days ago</div>
                </div>
                <div>does anyone know which monospace are they using when showing code?</div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="hidden lg:block bg-gray-100/40 dark:bg-gray-800/40">
        <div className="grid gap-4 p-4 md:p-6">
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168} />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">Introducing v0: Generative UI</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Vercel</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">300K views · 5 days ago</div>
            </div>
          </div>
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168} />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">Introducing the frontend cloud</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Vercel</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">1.2M views · 2 months ago</div>
            </div>
          </div>
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168} />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">Using Vercel KV with Svelte</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Lee Robinson</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">21K views · 1 week ago</div>
            </div>
          </div>
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168} />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">Loading UI with Next.js 13</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Delba</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">12K views · 10 days ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}

function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function YoutubeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>)
  );
}