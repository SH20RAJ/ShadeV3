'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"

import { useState, useEffect } from "react";

export default function Visuals() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch("/api/feed?type=image&limit=20");
        const data = await req.json();
        setImages(data.data.data);
        setLoading(false)
        // console.log(data.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 h-full overflow-auto ">
      {loading && <> {Array(20).fill(0).map((_,i)=> <SkeletonCard key={i}/>)} </>}
      {images && images.map((image,i) => (
        <Imgcard key={i} post={image} />
      ))}
    </div>
  );
}

function Imgcard({ post }) {
  return (
    <div style={{backdropFilter:`blur(40px)`,backgroundImage:`url('/blurred.jpeg')`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`,backgroundPosition:`center`}} className="relative h-80 min-w-80 backdrop:blur-md bg-slate-600 group overflow-hidden rounded-lg flex-1 sm:flex-[0_0_calc(50%-1rem)] md:flex-[0_0_calc(33.33%-1rem)] lg:flex-[0_0_calc(25%-1rem)]">
      <Link href={"/release/"+post.id} className="absolute inset-0 z-10">
          <span className="sr-only">View post</span>
      </Link>
      <img
        alt="Image 1"
        className="w-full h-full object-cover transition-all group-hover:scale-105"
        height={400}
        src={"https://res.cloudinary.com/practicaldev/image/fetch/"+post.contentURL}

        style={{
          aspectRatio: "600/400",
          objectFit: "cover",
        }}
        width={600}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-2">
          <Button className="bg-white/20 hover:bg-white/30 text-white" size="icon" variant="ghost">
            <AwardIcon className="w-5 h-5" />
          </Button>
          <Button className="bg-white/20 hover:bg-white/30 text-white" size="icon" variant="ghost">
            <AngryIcon className="w-5 h-5" />
          </Button>
          <Button className="bg-white/20 hover:bg-white/30 text-white" size="icon" variant="ghost">
            <ThumbsDownIcon className="w-5 h-5" />
          </Button>
        </div>
        <Link href={"/release/"+post.id} className=" inset-0 z-10 -mr-20">
        <Button className="bg-white/20 hover:bg-white/30 text-white" size="icon" variant="ghost">
          <ArrowRightIcon className="w-5 h-5" />
        </Button>
        </Link>
        <Button className="bg-white/20 hover:bg-white/30 text-white" size="icon" variant="ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        </Button>

  

      </div>
    </div>
  );
}

 
export function SkeletonCard() {
  return (
    <div className="flex flex-col relative h-80 min-w-80 group overflow-hidden rounded-lg flex-1 ">
      <Skeleton className="h-full w-[350px] rounded-xl" />
      <div className="space-y-2 mt-4">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}


function Loading(){
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 bg-gray-200 rounded-full animate-spin"></div>
    </div>
  )
}

// Include the definitions for AngryIcon, ArrowRightIcon, AwardIcon, and ThumbsDownIcon here


function AngryIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <path d="M7.5 8 10 9" />
      <path d="m14 9 2.5-1" />
      <path d="M9 10h0" />
      <path d="M15 10h0" />
    </svg>
  )
}


function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function AwardIcon(props) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
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


const post = {
  title: "Title",
  description: "Description",
  image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/aa607305-0dab-4f5b-955e-6ae36713ae4e/original=true/ffkklllll.jpeg",
  date: "2020-01-01",
  author: "Author",
  slug: "slug",
};