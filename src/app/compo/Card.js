import Link from "next/link";
export default function Card({ post }) {
  // console.log(post);
  let media = "";
  if (post.type === "image") {
    media = <img height={"200px"} src={post.contentURL} alt="image" />;
  }
  return (
    <>
      <div className="sm:max-w-md sm:w-auto w-full mx-auto my-8">
        <div className="bg-grey rounded-lg shadow-md w-full  h-full">
          {/* Post Header */}
          <div className="flex items-center px-4 py-3 border-b">
            <img
              src={
                (!post.author.avatar &&
                  "https://api.dicebear.com/8.x/adventurer/svg?seed=" +
                    post.author.username) ||
                post.author.avatar
              }
              alt="Profile Picture"
              className="h-10 w-10 rounded-full mr-2 bg-contain	"
            />
            <div>
              <Link href={"/" + post.author.username}>
                <h3 className="text-lg font-semibold">
                  {post.author.name}{" "}
                  <span className="text-sm text-gray-600">
                    @{post.author.username}
                  </span>
                </h3>{" "}
              </Link>
              <Link href={"/release/" + post.id}>
                <p className="text-sm text-gray-600">Released on {post.id}</p>
              </Link>
            </div>
          </div>
          {/* Post Content */}
          <div className="px-4 py-2">
            <p className="text-lg">{post.content} </p>
            {media}
          </div>
          {/* Post Actions */}
          <div className="flex items-center justify-evenly py-2 border-t">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
              <span>40</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <span>2</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              <span>20</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
              {/*         <span>Save</span> */}
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                />
              </svg>
              {/*         <span>Share</span> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
