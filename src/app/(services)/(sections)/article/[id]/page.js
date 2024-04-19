
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import posts from "@/app/get/posts";
import Showdown from "showdown";
import converter from "@/lib/showdown";
import { relativeDate } from "@/lib/funcs";

export default async function Component({params}) {
  let id = params.id;

  let result = await posts({postId: id});
  let post = result.data[0];

  // console.log(post); 


  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1 p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
            {<img
              alt="Blog Post Image"
              className="w-full h-64 object-cover"
              height={"100%"}
              src={post?.contentURL ||"/logo.png"}
              style={{
                // aspectRatio: "1200/600",
                objectFit: "cover",
              }}
              width={1200}
            />}
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <Badge className="bg-gray-100 text-gray-900 px-2 py-1 rounded-md dark:bg-gray-800 dark:text-gray-50">
                  Design
                </Badge>
                <Badge className="bg-gray-100 text-gray-900 px-2 py-1 rounded-md dark:bg-gray-800 dark:text-gray-50">
                  Minimalism
                </Badge>
                <Badge className="bg-gray-100 text-gray-900 px-2 py-1 rounded-md dark:bg-gray-800 dark:text-gray-50">
                  Trends
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-4">{post?.title}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <img
                    alt="Author Avatar"
                    className="rounded-full"
                    height={40}
                    src={post?.author.avatar ||"/placeholder.svg"}
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <span className="text-gray-500 dark:text-gray-400">{post?.author.name}</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">{ relativeDate(post?.createdAt)}</span>
              </div>
              <div className="prose prose-lg prose-gray dark:prose-invert" dangerouslySetInnerHTML={{ __html : converter.makeHtml(post?.content) }}>
              </div>
              <div className="flex items-center space-x-4 mt-6">
                <Button size="icon" variant="ghost">
                  <ThumbsUpIcon className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <ThumbsDownIcon className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <HeartIcon className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <ShareIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </article>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950">
                <img
                  alt="Related Article Image"
                  className="w-full h-40 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/300",
                    objectFit: "cover",
                  }}
                  width={600}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">The Rise of Minimalist Branding</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Discover how leading brands are embracing minimalist design principles to create impactful and
                    memorable identities.
                  </p>
                  <Link className="text-blue-500 hover:underline" href="#">
                    Read More
                  </Link>
                </div>
              </article>
              <article className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950">
                <img
                  alt="Related Article Image"
                  className="w-full h-40 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/300",
                    objectFit: "cover",
                  }}
                  width={600}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Minimalist Web Design Trends to Watch</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Explore the latest minimalist web design trends and how they can elevate your online presence.
                  </p>
                  <Link className="text-blue-500 hover:underline" href="#">
                    Read More
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-4 px-6 md:px-8 text-center dark:bg-gray-950">
        <p>© 2023 Blog. All rights reserved.</p>
      </footer>
    </div>
  )
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MonitorIcon(props) {
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
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  )
}


function MoonIcon(props) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function SunIcon(props) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}


function ThumbsDownIcon(props) {
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
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}
