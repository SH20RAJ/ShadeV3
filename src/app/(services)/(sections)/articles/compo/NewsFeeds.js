"use client";
import { relativeDate } from "@/lib/funcs";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NewsFeeds() {
  const [loading, setLoading] = useState(true);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("/api/randomfeed?limit=5&type=article");
        const data = await res.json();
        setFeed(data.data);
        setLoading(false);
        console.log(feed, loading);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchdata();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Splitting the feed array into two separate arrays
  const firstFourPosts = feed.slice(0, 4);
  const remainingPost = feed.length > 4 ? feed[4] : null;

  return (
        <div className="m mx-auto p-4 w-full">
          {loading ? (
            <Loader />
          ) : (
            // Actual content when loading is false
            <div className="flex flex-col md:flex-row -mx-1.5 p-4">
              {remainingPost && (
                <Link
                  href={"/article/" + remainingPost.id}
                  className="h-72 md:h-auto w-full md:w-7/12 mx-1.5 mb-6 md:mb-0 group"
                >
                  <div className="h-72 md:h-full relative">
                    <img
                      src={remainingPost.contentURL}
                      className="absolute object-cover w-full h-72 md:h-full rounded-md"
                    />
                    <div className="absolute gradient w-full h-72 md:h-full rounded-md z-10" />
                    <div className="absolute left-0 right-0 bottom-0 p-4 z-30">
                      <h1 className="font-bold text-white leading-tight sm:mb-1.5 group-hover:underline_ text-2xl md:text-3xl">
                        {remainingPost.title}
                      </h1>
                      <div className="text-xs text-white hidden sm:block">
                        <div className="flex items-center">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="clock"
                            className="h-3 mr-1"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                            />
                          </svg>
                          <span className="text-xs text-white">
                            {relativeDate(remainingPost.createdAt)} | Stephen
                            Ainsworth
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              <div className="w-full md:w-5/12 mx-1.5">
                {firstFourPosts.map((post, i) => (
                  <Link
                    key={i}
                    href={"/article/" + post.id}
                    className="flex items-center group mb-3 pb-3 border-b"
                  >
                    <img
                      src={post.contentURL || "/logo.png"}
                      className="rounded-md object-cover mr-3 h-24 w-24"
                    />
                    <div className="flex-1">
                      <h2 className="font-bold text-lg leading-tight group-hover:underline_ mb-2">
                        {post.title}
                      </h2>
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="clock"
                          className="h-3 mr-1"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                          />
                        </svg>
                        <span className="text-xs">
                          {relativeDate(post.createdAt)} | Author
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
  );
}

function Loader() {
  return (
    <div className="flex flex-col md:flex-row -mx-1.5 p-4 animate-pulse w-full">
  <a href="/article/87" className="h-72 md:h-auto w-full md:w-7/12 mx-1.5 mb-6 md:mb-0 group">
    <div className="h-72 md:h-full relative">
      <img src="https://shade.sh20raj.com/placeholder.svg" className="absolute z-0 object-cover w-full h-72 md:h-full rounded-md" />
      <div className="absolute gradient w-full h-72 md:h-full rounded-md z-10" />
      <div className="absolute left-0 right-0 bottom-0 p-4 z-30">
        <h1 className="font-bold text-white leading-tight sm:mb-1.5 group-hover:underline_ text-2xl md:text-3xl w-full bg-gray-100  dark:bg-neutral-400 h-10 rounded-xl" />
        <div className="text-xs text-white hidden sm:block">
          <div className="flex items-center">
            <span className="text-xs text-white">
              <div className="h-4 w-48 rounded-md animate-pulse bg-neutral-300 dark:bg-neutral-700" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </a>
  <div className="w-full md:w-5/12 mx-1.5">
    <a className="flex items-center group mb-3 pb-3 border-b" href="/article/120">
      <img src="https://shade.sh20raj.com/placeholder.svg" className="rounded-md object-cover mr-3 h-24 w-24" />
      <div className="flex-1">
        <h2 className="font-bold text-lg leading-tight group-hover:underline_ mb-8 h-8 w-48 rounded-md animate-pulse bg-neutral-300 dark:bg-neutral-700">
        </h2>
        <div className="h-4 w-48 rounded-md animate-pulse bg-neutral-300 dark:bg-neutral-700 mb-2" />
        <div className="h-2 w-24 rounded-md animate-pulse bg-neutral-300 dark:bg-neutral-700" />
      </div>
    </a><a className="flex items-center group mb-3 pb-3 border-b" href="/article/120">
      <img src="https://shade.sh20raj.com/placeholder.svg" className="rounded-md object-cover mr-3 h-24 w-24" />
      <div className="flex-1">
        <h2 className="font-bold text-lg leading-tight group-hover:underline_ mb-8 h-8 w-48 rounded-md animate-pulse bg-neutral-300 dark:bg-neutral-700">
        </h2>
        <div className="h-4 w-48 rounded-md animate-pulse bg-neutral-300 dark:bg-neutral-700 mb-2" />
        <div className="h-2 w-24 rounded-md animate-pulse bg-neutral-300 dark:bg-neutral-700" />
      </div>
    </a><a className="flex items-center group mb-3 pb-3 border-b" href="/article/120">
      <img src="https://shade.sh20raj.com/placeholder.svg" className="rounded-md object-cover mr-3 h-24 w-24" />
      <div className="flex-1">
        <h2 className="font-bold text-lg leading-tight group-hover:underline_ mb-8 h-8 w-48 rounded-md animate-pulse bg-neutral-300 dark:bg-neutral-700">
        </h2>
        <div className="h-4 w-48 rounded-md animate-pulse bg-neutral-300 dark:bg-neutral-700 mb-2" />
        <div className="h-2 w-24 rounded-md animate-pulse bg-neutral-300 dark:bg-neutral-700" />
      </div>
    </a>
  </div>
</div>

  );
}
