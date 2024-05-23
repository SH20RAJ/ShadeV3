/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/W7pZOlhiule
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Rethink_Sans } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

rethink_sans({
  subsets: ['latin'],
  display: 'swap',
})

dm_sans({
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

export function WatchPage() {
  return (
    (<div
      className="w-full px-4 mx-auto grid grid-rows-[auto_1fr_auto] gap-4 md:gap-6 pb-10">
      <header>
        <div className="mx-auto h-14 flex items-center gap-4">
          <Link className="flex gap-2 font-semibold items-center" href="#">
            <YoutubeIcon className="w-8 h-8 text-red-500" />
            YouTube
          </Link>
          <div className="flex-1 ml-auto">
            <form className="max-w-sm mx-auto">
              <Input className="rounded-full" placeholder="Search" type="search" />
            </form>
          </div>
          <Avatar className="w-8 h-8 border">
            <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="grid md:grid-cols-6 gap-10 items-start">
        <div className="col-span-1 grid gap-4">
          <nav className="grid gap-1 px-2">
            <Button asChild className="justify-start gap-2" size="sm" variant="ghost">
              <Link href="#">
                <HomeIcon className="w-4 h-4" />
                Home
              </Link>
            </Button>
            <Button asChild className="justify-start gap-2" size="sm" variant="ghost">
              <Link className="gap-2" href="#">
                <CompassIcon className="w-4 h-4" />
                Explore
              </Link>
            </Button>
            <Button asChild className="justify-start gap-2" size="sm" variant="ghost">
              <Link className="gap-2" href="#">
                <SubscriptIcon className="w-4 h-4" />
                Subscriptions
              </Link>
            </Button>
            <Button asChild className="justify-start gap-2" size="sm" variant="ghost">
              <Link className="gap-2" href="#">
                <LibraryIcon className="w-4 h-4" />
                Library
              </Link>
            </Button>
          </nav>
        </div>
        <div className="col-span-5 grid gap-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Thumbnail"
                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                height={168}
                src="/placeholder.svg"
                width={300} />
              <div className="flex-1 py-2">
                <h3 className="font-semibold line-clamp-2">Vercel Ship Keynote: Introducing the frontend cloud</h3>
                <div className="flex gap-2 items-center text-sm">
                  <div className="flex gap-2 items-center">
                    <img
                      alt="Thumbnail"
                      className="rounded-full object-cover aspect-square"
                      height={32}
                      src="/placeholder.svg"
                      width={32} />
                    <div className="text-xs">Vercel</div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">70K views</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Thumbnail"
                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                height={168}
                src="/placeholder.svg"
                width={300} />
              <div className="flex-1 py-2">
                <h3 className="font-semibold line-clamp-2">Introducing v0: Generative UI</h3>
                <div className="flex gap-2 items-center text-sm">
                  <div className="flex gap-2 items-center">
                    <img
                      alt="Thumbnail"
                      className="rounded-full object-cover aspect-square"
                      height={32}
                      src="/placeholder.svg"
                      width={32} />
                    <div className="text-xs">Vercel</div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">300K views</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Thumbnail"
                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                height={168}
                src="/placeholder.svg"
                width={300} />
              <div className="flex-1 py-2">
                <h3 className="font-semibold line-clamp-2">Introducing the frontend cloud</h3>
                <div className="flex gap-2 items-center text-sm">
                  <div className="flex gap-2 items-center">
                    <img
                      alt="Thumbnail"
                      className="rounded-full object-cover aspect-square"
                      height={32}
                      src="/placeholder.svg"
                      width={32} />
                    <div className="text-xs">Vercel</div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">1.2M views</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Thumbnail"
                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                height={168}
                src="/placeholder.svg"
                width={300} />
              <div className="flex-1 py-2">
                <h3 className="font-semibold line-clamp-2">Using Vercel KV with Svelte</h3>
                <div className="flex gap-2 items-center text-sm">
                  <div className="flex gap-2 items-center">
                    <img
                      alt="Thumbnail"
                      className="rounded-full object-cover aspect-square"
                      height={32}
                      src="/placeholder.svg"
                      width={32} />
                    <div className="text-xs">Lee Robinson</div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">21K views</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Thumbnail"
                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                height={168}
                src="/placeholder.svg"
                width={300} />
              <div className="flex-1 py-2">
                <h3 className="font-semibold line-clamp-2">Loading UI with Next.js 13</h3>
                <div className="flex gap-2 items-center text-sm">
                  <div className="flex gap-2 items-center">
                    <img
                      alt="Thumbnail"
                      className="rounded-full object-cover aspect-square"
                      height={32}
                      src="/placeholder.svg"
                      width={32} />
                    <div className="text-xs">Delba</div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">12K views</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Thumbnail"
                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                height={168}
                src="/placeholder.svg"
                width={300} />
              <div className="flex-1 py-2">
                <h3 className="font-semibold line-clamp-2">Introducing the Vercel Edge Network</h3>
                <div className="flex gap-2 items-center text-sm">
                  <div className="flex gap-2 items-center">
                    <img
                      alt="Thumbnail"
                      className="rounded-full object-cover aspect-square"
                      height={32}
                      src="/placeholder.svg"
                      width={32} />
                    <div className="text-xs">Vercel</div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">500K views</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Thumbnail"
                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                height={168}
                src="/placeholder.svg"
                width={300} />
              <div className="flex-1 py-2">
                <h3 className="font-semibold line-clamp-2">Building a Headless CMS with Next.js</h3>
                <div className="flex gap-2 items-center text-sm">
                  <div className="flex gap-2 items-center">
                    <img
                      alt="Thumbnail"
                      className="rounded-full object-cover aspect-square"
                      height={32}
                      src="/placeholder.svg"
                      width={32} />
                    <div className="text-xs">Leerob</div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">45K views</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Thumbnail"
                className="aspect-video rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                height={168}
                src="/placeholder.svg"
                width={300} />
              <div className="flex-1 py-2">
                <h3 className="font-semibold line-clamp-2">Serverless Functions with Next.js</h3>
                <div className="flex gap-2 items-center text-sm">
                  <div className="flex gap-2 items-center">
                    <img
                      alt="Thumbnail"
                      className="rounded-full object-cover aspect-square"
                      height={32}
                      src="/placeholder.svg"
                      width={32} />
                    <div className="text-xs">Leerob</div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">65K views</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>)
  );
}

function CompassIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>)
  );
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}


function LibraryIcon(props) {
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
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </svg>)
  );
}


function SubscriptIcon(props) {
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
      <path d="m4 5 8 8" />
      <path d="m12 5-8 8" />
      <path
        d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" />
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