// import React from 'react'

// export default function TextCard1({text}) {
//   return (
//     <>
//         <div className="textd shadow-md rounded-lg p-4 w-full">
//         {/* Profile Section */}
//         <div className="flex items-center mb-4">
//             <img src="/image.png" alt="Profile" className="w-10 h-10 rounded-full mr-2 object-cover" />
//             <div>
//             <h2 className="text-lg font-semibold">John Doe</h2>
//             <p className="text-gray-600">@johndoe</p>
//             </div>
//         </div>
//         {/* Tweet Content */}
//         <p className="text--800 mb-4 texed">This is the tweet content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         {/* Interaction Buttons */}
//         <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-4">
//             {/* Like Button */}
//             <button className="flex items-center space-x-1 text-gray-500">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//                 <span>10</span>
//             </button>
//             {/* Dislike Button */}
//             <button className="flex items-center space-x-1 text-gray-500">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//                 <span>5</span>
//             </button>
//             {/* Comment Button */}
//             <button className="flex items-center space-x-1 text-gray-500">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//                 <span>20</span>
//             </button>
//             </div>
//             {/* Reply Button */}
//             <div>
//             <button className="flex items-center space-x-1 text-blue-500">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//                 <span>Reply</span>
//             </button>
//             </div>
//         </div>
//         </div>


//     </>
//   )
// }


'use client'
import converter from "@/lib/showdown";
import { relativeDate } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
export default function Card({ post }) {
    const[liked,setLiked] = useState(0);



  // console.log(post);
  let media = "";
  if (post.type === "image") {
    media = <img height={"200px"} src={post.contentURL} alt="image" />;
  }


  async function handlelike(type,e){
    // e.target.classList.toggle("text-red-500");
    // post.likeCounts.like++
    setLiked(!liked)
    let res = await fetch("/api/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: post.id,
        userId: 1,
        reaction : type,
      }),
    });
    let data = await res.json();
    console.log(data);
  }
  return (
    <>
        <div className="textd shadow-md rounded-lg p-4 w-full">
        {/* Profile Section */}
        <div className="flex items-center mb-4">
        <img
              src={
                (!post.author.avatar &&
                  "https://api.dicebear.com/8.x/adventurer/svg?seed=" +
                    post.author.username) ||
                post.author.avatar
              }
              alt="Profile Picture"
              className="h-10 w-10 rounded-full mr-2 bg-contain	"
            />            <div>
            <h2 className="text-lg font-semibold">{post.author.name}</h2>
            <p className="text-gray-600">@{post.author.username}            <Link href={"/release/" + post.id}>
                <span className="text-sm text-gray-600">Released on {relativeDate(post.createdAt)}</span>
              </Link></p>

            </div>
        </div>
        {/* Tweet Content */}
        <p className="text--800 mb-4 texed">{post.content}</p>
        {/* Interaction Buttons */}
        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
            {/* Like Button */}
            <button onClick={(e)=>handlelike("like",e)} className={"flex items-center space-x-1  " + (liked && " text-red-500 " ) || "text-gray-500" }>
            <svg  xmlns="http://www.w3.org/2000/svg" fill={liked && "currentColor" ||"none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>

 
                <span>{liked && post.likeCounts.like + 1 || post.likeCounts.like }</span>
            </button>
            {/* Dislike Button */}
            {/* <button onClick={(e)=>handlelike("dislike")} className="flex items-center space-x-1 text-gray-500">
                DisLike                <span>5</span>
            </button> */}
            {/* Comment Button */}
            {/* <button className="flex items-center space-x-1 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>{20}</span>
            </button> */}
            </div>
            {/* Reply Button */}
            <div>
            <button className="flex items-center space-x-1 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span>Reply</span>
            </button>
            </div>
        </div>
        </div>
    </>
  );
}
