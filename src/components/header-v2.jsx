/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/5gUDGRWhUfv
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";
import { useSession } from "next-auth/react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Toggle } from "@/components/ui/toggle"
import { Badge } from "@/components/ui/badge"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { AlertCircleIcon, ArrowRightIcon, ArticleIcon, BellIcon, CalendarIcon, InboxIcon, LogOutIcon, MoonIcon, MountainIcon, PlayIcon, PlusIcon, SearchIcon, SettingsIcon, UserIcon } from "@/lib/icons";


export function HeaderV2() {
  const { data: session, status } = useSession();
  let user = session?.user;
  console.log();
  return (
    (<div className="flex flex-col  ">
      <header
        className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 bg-white dark:bg-gray-900 shadow-sm">
        <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50">
           <MountainIcon className="h-6 w-6 sm:mr-4" />
            <span>Shade</span>
          </Link>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md md:max-w-none">
            <Button className="rounded-full md:hidden" size="icon" variant="ghost">
              <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="sr-only">Search</span>
            </Button>
            <div className="hidden md:block">
              <SearchIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full rounded-md bg-gray-100 px-9 py-2 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-50 dark:focus:bg-gray-700 dark:focus:ring-gray-300"
                placeholder="Search..."
                type="search" />
            </div>
          </div>
          <span id="modeto">

          <Toggle aria-label="Toggle dark mode">
            <MoonIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 " />
          </Toggle>
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="outline">
            <PlusIcon className="h-5 w-5" />
            <span className="sr-only">Create post</span>
          </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Shade Social</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={"/new/chirp"}>
              <DropdownMenuItem>
                <UserIcon className="mr-2 h-4 w-4" />
                Chirp
              </DropdownMenuItem>

              </Link>
              <Link href={"/new/video"}>

              <DropdownMenuItem>
                <PlayIcon className="mr-2 h-4 w-4" />
                Video
              </DropdownMenuItem>
              </Link>


              <DropdownMenuSeparator />
              <Link href={"/new/post"}>
              <DropdownMenuItem>
                <LogOutIcon className="mr-2 h-4 w-4" />
                Post
              </DropdownMenuItem>
              </Link>
              <Link href={"/new"}>

              <DropdownMenuItem>
                <ArticleIcon className="mr-2 h-4 w-4" />
                Article
              </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          {
            user?.id &&
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="relative rounded-full" size="icon" variant="ghost">
                <Badge
                  className="absolute -top-1 -right-1 h-4 min-w-[1rem] rounded-full bg-red-500 px-1 text-xs font-medium text-white">
                  3
                </Badge>
                <BellIcon className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                    <InboxIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">New message</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">You have a new message from Jane.</p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                    <CalendarIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Upcoming event</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Your team meeting is scheduled for tomorrow.
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                    <AlertCircleIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">System alert</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Your server is running low on disk space.
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">View all</span>
                  <ArrowRightIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          }
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 w-9">
                <AvatarImage alt="@shadcn" src={user?.image || "/placeholder-avatar.jpg"}/>
                <AvatarFallback>Sh</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            {user?.id && 
              <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={"/user/"+user.id}>
              <DropdownMenuItem>
                <UserIcon className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
                </Link>
              <DropdownMenuItem>
                <SettingsIcon className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link href={"/logout"}>
              <DropdownMenuItem>
                <LogOutIcon className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
            ||
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Shade Social</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={"/join"}>
              <DropdownMenuItem>
                <UserIcon className="mr-2 h-4 w-4" />
                Login
              </DropdownMenuItem>
              </Link>
              <Link href={"/join"}>
              <DropdownMenuItem>
                <UserIcon className="mr-2 h-4 w-4" />
                Register
              </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>

            }




          </DropdownMenu>
        </div>
      </header>
      
    </div>)
  );
}
