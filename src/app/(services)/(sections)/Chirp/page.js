/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/uRQZyBLHObW
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'
import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Slider } from "@/components/ui/slider"
import { CardContent, Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { RedditPosts } from "../explore/compo/redditpposts"

export default function text() {
  return (
    (<div className="flex flex-col w-full min-h-screen">

      <main className="flex-1 grid grid-cols-[1fr_300px] gap-6 p-4 md:p-6">
        <div className="space-y-4">
          <ChirpCarousel/>
          <RedditPosts/>
        </div>
        <ChirpSidebar/>
      </main>
    </div>)
  );
}

function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>)
  );
}


function MoreHorizontalIcon(props) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
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


function TwitterIcon(props) {
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
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>)
  );
}



export  function ChirpSidebar() {
  return (
    <>
    <div className="w-full space-y-4">
          <div
            className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 border-b dark:border-gray-800">
              <div className="flex items-center gap-3">
                <Input
                  className="bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 text-sm flex-1"
                  placeholder="Search Chirp..."
                  type="text" />
                <Button className="rounded-full" size="icon" variant="ghost">
                  <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Button>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage alt="Trending" src="/placeholder-user.jpg" />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold">Trending</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">What's happening</div>
                </div>
                <Button size="icon" variant="ghost">
                  <MoreHorizontalIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage alt="News" src="/placeholder-user.jpg" />
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold">News</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Stay informed</div>
                </div>
                <Button size="icon" variant="ghost">
                  <MoreHorizontalIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage alt="Sports" src="/placeholder-user.jpg" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold">Sports</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Scores, highlights, and more</div>
                </div>
                <Button size="icon" variant="ghost">
                  <MoreHorizontalIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Button>
              </div>
            </div>
          </div>
          <div
            className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 border-b dark:border-gray-800">
              <div className="font-semibold">Who to follow</div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage alt="Elon Musk" src="/placeholder-user.jpg" />
                  <AvatarFallback>EM</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold">Elon Musk</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">@elonmusk</div>
                </div>
                <Button size="sm" variant="primary">
                  Follow
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage alt="Bill Gates" src="/placeholder-user.jpg" />
                  <AvatarFallback>BG</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold">Bill Gates</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">@BillGates</div>
                </div>
                <Button size="sm" variant="primary">
                  Follow
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage alt="Oprah Winfrey" src="/placeholder-user.jpg" />
                  <AvatarFallback>OW</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold">Oprah Winfrey</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">@Oprah</div>
                </div>
                <Button size="sm" variant="primary">
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export function ChirpCarousel(){
  return <>
  
  <div className="flex items-center justify-between w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2" variant="outline">
                  <FilterIcon className="w-5 h-5" />
                  <span>Category</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>All</DropdownMenuItem>
                <DropdownMenuItem>News</DropdownMenuItem>
                <DropdownMenuItem>Sports</DropdownMenuItem>
                <DropdownMenuItem>Entertainment</DropdownMenuItem>
                <DropdownMenuItem>Technology</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <Slider className="w-[200px]" defaultValue={[0]} max={100} step={1} /> */}
          </div>
          <Carousel className="w-[90%] self-center m-auto">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div className="space-y-2">
                        <div className="font-semibold">Mark Zuckerberg</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          <time dateTime="2023-04-18T12:34:56Z">18 April at 12:34</time>
                        </div>
                        <p className="text-gray-800 dark:text-gray-200">
                          Excited to share some big news - we're launching a new feature on Twitter that will
                          revolutionize the way you connect with friends and family. Stay tuned for more details!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div className="space-y-2">
                        <div className="font-semibold">Jane Doe</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          <time dateTime="2023-04-17T09:12:34Z">17 April at 9:12</time>
                        </div>
                        <p className="text-gray-800 dark:text-gray-200">
                          Excited to share some big news - we're launching a new feature on Twitter that will
                          revolutionize the way you connect with friends and family. Stay tuned for more details!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div className="space-y-2">
                        <div className="font-semibold">Elon Musk</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          <time dateTime="2023-04-16T15:23:45Z">16 April at 3:23</time>
                        </div>
                        <p className="text-gray-800 dark:text-gray-200">
                          Excited to share some big news - we're launching a new feature on Twitter that will
                          revolutionize the way you connect with friends and family. Stay tuned for more details!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div className="space-y-2">
                        <div className="font-semibold">Oprah Winfrey</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          <time dateTime="2023-04-15T20:00:00Z">15 April at 8:00</time>
                        </div>
                        <p className="text-gray-800 dark:text-gray-200">
                          Excited to share some big news - we're launching a new feature on Twitter that will
                          revolutionize the way you connect with friends and family. Stay tuned for more details!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          </>
}
