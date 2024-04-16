'use client'
import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Radio from './radio';

// import { useSession } from "next-auth/react"


function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
  });
}



function CreateNew() {
  const [content, setContent] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [image, setImage] = useState('');
  let box = useRef('box');
  const [imgsrc, setImgsrc] = useState('');
  const [posting, setPosting] = useState(0);
  const [postmode, setPostmode] = useState('text');

 async function setimg(){
  // let filed = await fileToBase64(image)
  //    console.log(filed);
  //    setImgsrc("data:image/jpeg;base64,"+filed)
 }





let create = async (e) => {
  console.log("Creating post");
  (()=> toast("Creating Post ✨"))()
  setPosting(1)

  e.preventDefault();

  let headersList = {
    "Content-Type": "application/json"
   }
   
   if(image){
     let filed = await fileToBase64(image)
     console.log(filed);
    var bodyContent = JSON.stringify({
     "content":content,
     "file":filed
   });
   } else {
    var bodyContent = JSON.stringify({
      "content":content,
    });
   }
   
   
   let response = await fetch("/api/post", { 
     method: "POST",
     body: bodyContent,
     headers: headersList
   });
   
   setContent("");
   let data = await response.text();
   console.log(data);
  (() => toast("Post uploaded successfully ✨"))()
  console.log("Created post");

}

let addImage = async (image) => {

  let filed = await fileToBase64(image);
  // console.log(filed);

  var bodyContent = JSON.stringify({
    "file":filed,
  });
  let headersList = {
    "Content-Type": "application/json"
   }

  let response = await fetch("/cdn", { 
    method: "POST",
    body: bodyContent,
    headers: headersList
  });
    let imageUrl = await response.text();
    imageUrl = imageUrl.replace(/['"]+/g, '');
    var textarea = document.getElementById("content");
    textarea.value += "![Image](" + imageUrl + ")";

}



 // Function to adjust textarea height based on content
 function adjustTextareaHeight(textarea,d) {
  console.log(textarea);
     textarea.style.height = "auto";
     textarea.style.height = textarea.scrollHeight + "px";
     if(d){
      console.log(d);
       textarea.style.height = "200px";
     }
 }

 useEffect(()=>{
   console.warn("mode",postmode)
   document.postmode = postmode;
 },[postmode])

 
 // Add event listeners
//  textarea.addEventListener("input", adjustTextareaHeight);
//  textarea.addEventListener("focus", adjustTextareaHeight);
//  textarea.addEventListener("blur", adjustTextareaHeight);
 
 

  return (
    <div className="w-full rounded-lg p-6 shadow-md">
      <form onSubmit={create} className="w-full">
        <div className="flex items-start space-x-4">
          <span className="overflow-hidden relative w-12 h-12 rounded-full border-2 border-blue-500 dark:border-blue-500 bg-cover">
            <img
              className="w-12 h-12 object-cover"
              src={"/image.png"}
              alt="Avatar"
            />
          </span>
          <div className="flex-1">
            {(postmode == "video" || postmode == "image" || postmode == "article") && 
            <label htmlFor="title" className=' -mt-4'>
             <span className=' '></span>
            <input 
              placeholder={(postmode === "article") && "Title of your Article" || postmode === "image" && "Cation your Image 🔥" || postmode === "video" && "Video Title ✨" }
              className=' w-full bg-transparent border p-2 mb-2' type="text" id='title' name='title' />
            </label>}

            {(postmode !== "image") &&  <textarea
              id="content"
              name="content"
              rows="3"
              value={content}
              onFocus={(e)=>adjustTextareaHeight(e.target)}
              onBlur={(e)=>adjustTextareaHeight(e.target)}
              onChange={(e) => setContent(e.target.value,"blur")}
              className="w-full resize-verticle bg-transparent dark:text-emerald-400 text-pink-800 dark:bg-transparent focus:outline-none border-b-2 border-gray-300 dark:border-gray-600 placeholder-gray-400"
              placeholder={(postmode === "article") && "Write the Markdown Content Here 😇" || postmode === "text" && "What's happening? 🍀" || postmode === "video" && "Video description goes here ✨" }
            ></textarea>}
            
           
            <div className="flex items-center mt-2">

              {postmode === "article" && <label htmlFor="addimg" className="mr-2">
                <input
                  type="file"
                  id="addimg"
                  name="addimg"
                  onChange={(e) => addImage(e.target.files[0])}
                  className="hidden"
                />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                    </svg>
              </label>}

              {postmode === "image" && <label htmlFor="image" className="mr-2">
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    setimg()
                  }}
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
              </label> }

              {postmode === "video" && <label htmlFor="video" className="mr-2">
                <input
                  type="file"
                  id="video"
                  name="video"
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
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </label>}
              
              

              


            

            </div>

            
          </div>
        </div>
        <div className="flex justify-evenly mt-4">
          <div className="w-full">

          <Radio postmode={postmode} setPostmode={setPostmode}/>
          </div>
          <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
            disabled={posting}
          >
            Release
          </button>
          </div>
   
        </div>
      </form>
      <ToastContainer />

    </div>
  );
}

export default CreateNew;
