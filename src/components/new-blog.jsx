/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/95mEwmYp0LX
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Archivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { NavigationMenuLink, NavigationMenuItem, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function NewBlog() {
  return (
    (<div className="flex min-h-screen flex-col">
      <header
        className="flex h-16 items-center border-b bg-gray-100 px-6 dark:bg-gray-800">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <BookIcon className="h-6 w-6" />
            <span>My Blog</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2" href="/blog">
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2" href="/about">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2" href="/contact">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button className="h-8 w-8" size="icon" variant="outline">
            <SearchIcon className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <div
          className="hidden w-64 border-r bg-gray-100/40 p-4 dark:bg-gray-800/40 lg:block">
          <div className="space-y-4 overflow-auto max-h-[calc(100vh-4rem)]">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Drafts</h3>
              <div className="grid gap-2">
                <Link
                  className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                  href="#">
                  <span className="truncate">My First Blog Post</span>
                  <Badge className="text-sm" variant="pending">
                    Draft
                  </Badge>
                </Link>
                <Link
                  className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                  href="#">
                  <span className="truncate">Upcoming Feature Release</span>
                  <Badge className="text-sm" variant="pending">
                    Draft
                  </Badge>
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Published</h3>
              <div className="grid gap-2">
                <Link
                  className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                  href="#">
                  <span className="truncate">Introducing Our New Product</span>
                  <Badge className="text-sm" variant="success">
                    Published
                  </Badge>
                </Link>
                <Link
                  className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                  href="#">
                  <span className="truncate">5 Tips for Better Productivity</span>
                  <Badge className="text-sm" variant="success">
                    Published
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <main className="flex-1 p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <Input className="text-2xl font-bold" placeholder="Blog Post Title" type="text" />
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <ImageIcon className="h-4 w-4" />
                    <span>Upload Image</span>
                  </Button>
                  <Button size="sm" variant="outline">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Schedule</span>
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Textarea
                  className="h-[400px] resize-none"
                  placeholder="Start writing your blog post..." />
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Save Draft</Button>
                  <Button>Publish</Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>)
  );
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>)
  );
}


function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function ImageIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>)
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