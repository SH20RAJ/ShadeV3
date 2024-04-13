'use client'
import React, { useRef, useState } from 'react';

// import { useSession } from "next-auth/react"


function CreatePost() {
  const [content, setContent] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [image, setImage] = useState('');
  let box = useRef('box');

const formData = new FormData();
formData.append('image', image);
formData.append('content', content);



let create = async (e) => {
  console.log("Creating post");

  e.preventDefault();
  let headersList = {
    "Content-Type": "application/json"
   }
   
   let bodyContent = JSON.stringify({
     "content":content,
   });
   
   let response = await fetch("/api/post", { 
     method: "POST",
     body: bodyContent,
     headers: headersList
   });
   
   let data = await response.text();
   console.log(data);
   setContent("")
   alert("Post uploaded successfully");
  console.log("Created post");
}

// const { data: session, status } = useSession()

// console.log(status);

  return (
    <div className="w-full rounded-lg p-6 shadow-md">
      <form onSubmit={create} className="w-full">
        <div className="flex items-start space-x-4">
          <span className="overflow-hidden relative w-12 h-12 rounded-full border-2 border-blue-500 dark:border-blue-500 bg-cover">
            <img
              className="w-12 h-12 object-cover"
              src={"https://assets.codepen.io/3306515/IMG_2025.jpg"}
              alt="Avatar"
            />
          </span>
          <div className="flex-1">
            <textarea
              id="content"
              name="content"
              rows="3"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full resize-none bg-transparent dark:text-emerald-400 text-pink-800 dark:bg-transparent focus:outline-none border-b-2 border-gray-300 dark:border-gray-600 placeholder-gray-400"
              placeholder="What's happening?"
            ></textarea>
            <div className="flex items-center mt-2">
              <label htmlFor="image" className="mr-2">
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="hidden"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer text-blue-500 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </label>
              <label htmlFor="video" className="mr-2">
                <input
                  type="file"
                  id="video"
                  name="video"
                  // onChange={(e) => setVideo(e.target.files[0])}
                  className="hidden"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer text-blue-500 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <span ref={box} className='flex self-start justify-start ml-[60px] textd'>Hlw Howdy! 😇🌹</span>
          <button
            type="submit"
            className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
