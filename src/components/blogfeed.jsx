/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/0BzOanP5a19
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Chivo } from 'next/font/google'
import { Rubik } from 'next/font/google'

chivo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function blogfeed() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-6 md:py-8 lg:py-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                alt="Featured Blog Post"
                className="rounded-lg object-cover"
                height={500}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "800/500",
                  objectFit: "cover",
                }}
                width={800} />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-400 uppercase">Featured Post</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">The Future of Web Development</h1>
              <p className="text-gray-300 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt,
                nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
              </p>
              <Link
                className="inline-flex items-center mt-6 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md"
                href="#">
                Read More
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Recent Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Blog Post 1"
                  className="w-full h-48 object-cover"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Mastering React: A Comprehensive Guide</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt,
                    nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
                  </p>
                  <Link
                    className="inline-flex items-center text-gray-800 hover:text-gray-900 font-medium"
                    href="#">
                    Read More
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Blog Post 2"
                  className="w-full h-48 object-cover"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Exploring the Power of TypeScript</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt,
                    nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
                  </p>
                  <Link
                    className="inline-flex items-center text-gray-800 hover:text-gray-900 font-medium"
                    href="#">
                    Read More
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Blog Post 3"
                  className="w-full h-48 object-cover"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Unleashing the Potential of Serverless</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt,
                    nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
                  </p>
                  <Link
                    className="inline-flex items-center text-gray-800 hover:text-gray-900 font-medium"
                    href="#">
                    Read More
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-300 hover:text-white" href="#">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300 hover:text-white" href="#">
                    Programming
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300 hover:text-white" href="#">
                    Design
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300 hover:text-white" href="#">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-1 rounded-md text-sm"
                  href="#">
                  React
                </Link>
                <Link
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-1 rounded-md text-sm"
                  href="#">
                  TypeScript
                </Link>
                <Link
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-1 rounded-md text-sm"
                  href="#">
                  Serverless
                </Link>
                <Link
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-1 rounded-md text-sm"
                  href="#">
                  Web Development
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Search</h3>
              <form>
                <div className="relative">
                  <SearchIcon
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    className="bg-gray-800 text-gray-300 pl-10 pr-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-700"
                    placeholder="Search blog posts"
                    type="text" />
                </div>
              </form>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <form>
                <div className="space-y-4">
                  <div>
                    <Label className="text-gray-300" htmlFor="name">
                      Name
                    </Label>
                    <Input
                      className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-700"
                      id="name"
                      placeholder="Your name"
                      type="text" />
                  </div>
                  <div>
                    <Label className="text-gray-300" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-700"
                      id="email"
                      placeholder="Your email"
                      type="email" />
                  </div>
                  <div>
                    <Label className="text-gray-300" htmlFor="message">
                      Message
                    </Label>
                    <Textarea
                      className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-700"
                      id="message"
                      placeholder="Your message" />
                  </div>
                  <Button
                    className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md"
                    type="submit">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>)
  );
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
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