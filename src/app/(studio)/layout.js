import "@/app/globals.css";
import "@/app/article.css";
import Sidebar from "../compo/Sidebar";
import Head from "../compo/head";
import Header from "../compo/Header";
import NextAuthSessionProvider from "@/lib/SessionProvider";
import { Analytics } from "@vercel/analytics/react";
import NextTopLoader from "nextjs-toploader";

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Chivo } from "next/font/google";
import { Comfortaa } from "next/font/google";
import { HeaderV2 } from "@/components/header-v2";
import { StudioHeader, StudioSidebar } from "./studio/StudioEdit";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

const chivo = Chivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chivo",
});
const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comfortaa",
});

export let metadata = {
  title: "Shade || Home",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthSessionProvider>
      <html lang="en" className="dark">
        <body className={chivo.variable + comfortaa.variable}>
          <NextTopLoader />

          <div className="flex h-full w-full">
            <div className="hidden w-64 shrink-0 border-r bg-gray-100 dark:bg-gray-800 lg:block">
              <div className="flex h-full flex-col justify-between py-6">
                <nav className="space-y-1">
                  <h1 className=" w-full text-white text-center text-lg bg-pink-600 p-2 shadow-md rounded-lg ">
                    <Link href={"/"}>Shade</Link>
                  </h1>
                  <Link
                    className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                    href="#"
                  >
                    <HomeIcon className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <Link
                    className="flex items-center gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-50 dark:hover:bg-gray-600"
                    href="/studio/"
                  >
                    <VideoIcon className="h-4 w-4" />
                    Videos
                  </Link>
                  <Link
                    className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                    href="#"
                  >
                    <BarChartIcon className="h-4 w-4" />
                    Analytics
                  </Link>
                  <Link
                    className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                    href="#"
                  >
                    <SettingsIcon className="h-4 w-4" />
                    Settings
                  </Link>
                </nav>
                <div className="px-4">
                  <Link href={"/new/video"}>
                    <Button className="w-full" size="sm">
                      Upload Video
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <header className="bg-gray-100 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold">Video Management</h1>
                  <div className="flex items-center gap-4">
                    <Button className="h-8 w-8" size="icon" variant="ghost">
                      <BellIcon className="h-4 w-4" />
                      <span className="sr-only">Toggle notifications</span>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Avatar className="h-9 w-9">
                          <AvatarImage
                            alt="@shadcn"
                            src="/placeholder-avatar.jpg"
                          />
                          <AvatarFallback>JP</AvatarFallback>
                        </Avatar>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>My Account</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </header>
              <main className="flex-1 p-6 overflow-auto">{children}</main>
              {/* {children} */}
            </div>
          </div>

          <div
            className="footer"
            dangerouslySetInnerHTML={{
              __html: '<script src="/script.js"></script> ',
            }}
          ></div>
          <Analytics />
        </body>
      </html>
    </NextAuthSessionProvider>
  );
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}
