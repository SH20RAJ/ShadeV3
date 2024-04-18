
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import Imgcard from "./compo/imgcard"

export default function Component() {
  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col border-r bg-gray-100 p-6 dark:border-gray-800 dark:bg-gray-950 lg:hidden">
        <div className="mb-6 flex items-center justify-between">
          <img
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
            height={40}
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width={40}
          />
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
        <nav className="flex-1 space-y-2">
          <Link
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
            href="#"
          >
            <HomeIcon className="mr-3 h-5 w-5" />
            <span className="sr-only">Home</span>
          </Link>
          <Link
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
            href="#"
          >
            <ExpandIcon className="mr-3 h-5 w-5" />
            <span className="sr-only">Explore</span>
          </Link>
          <Link
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
            href="#"
          >
            <UserIcon className="mr-3 h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Link>
          <Link
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
            href="#"
          >
            <SettingsIcon className="mr-3 h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Link>
        </nav>
      </div>
      <div className="hidden w-64 flex-col border-r bg-gray-100 p-6 dark:border-gray-800 dark:bg-gray-950 lg:flex">
        <div className="mb-6">
          <div className="mb-4 flex items-center">
            <img
              alt="User Avatar"
              className="h-10 w-10 rounded-full"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            />
            <div className="ml-3">
              <h3 className="text-base font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">@johndoe</p>
            </div>
          </div>
          <Input
            className="w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm focus:border-gray-400 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50"
            placeholder="Search"
            type="search"
          />
        </div>
        <nav className="flex-1 space-y-2">
          <Link
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
            href="#"
          >
            <HomeIcon className="mr-3 h-5 w-5" />
            Home
          </Link>
          <Link
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
            href="#"
          >
            <ExpandIcon className="mr-3 h-5 w-5" />
            Explore
          </Link>
          <Link
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
            href="#"
          >
            <UserIcon className="mr-3 h-5 w-5" />
            Profile
          </Link>
          <Link
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
            href="#"
          >
            <SettingsIcon className="mr-3 h-5 w-5" />
            Settings
          </Link>
        </nav>
      </div>
      <div className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-10 border-b bg-white/40 px-4 py-4 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/40 lg:px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Gallery</h1>
            <div className="flex items-center space-x-4">
              <Link
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
                href="#"
              >
                Home
              </Link>
              <Link
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
                href="#"
              >
                Explore
              </Link>
              <Link
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
                href="#"
              >
                Profile
              </Link>
              <Link
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
                href="#"
              >
                Settings
              </Link>
            </div>
          </div>
        </header>
        <main className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:p-6">
          <Link className="relative group" href="#">
            <img
              alt="Image 1"
              className="h-full w-full rounded-md object-cover transition-opacity duration-300 group-hover:opacity-80"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ZoomInIcon className="h-8 w-8 text-white" />
            </div>
          </Link>
          <Imgcard/>
         
        </main>
      </div>
    </div>
  )
}

function ExpandIcon(props) {
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
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  )
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
  )
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
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
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function ZoomInIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="11" x2="11" y1="8" y2="14" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </svg>
  )
}
