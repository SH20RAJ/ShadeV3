import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"




export default function Imgcard() {
  return (
    <Link className="relative group" href="#">
            <img
              alt="Image 1"
              className="h-full w-full rounded-md object-cover transition-opacity duration-300 group-hover:opacity-80"
              height={300}
              src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7eb1bc8f-609f-4517-be82-27214f3dc72e/width=700/00059-3002820842.jpeg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width={300}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {/* <ZoomInIcon className="h-8 w-8 text-white" /> */}
            </div>
          </Link>
  )
}
