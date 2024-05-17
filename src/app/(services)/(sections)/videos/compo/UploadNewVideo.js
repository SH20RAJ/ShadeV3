"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import axios from "axios";

export default function UploadNewVideo() {
  const [remoteuploadmode, setremoteuploadmode] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [privacy, setPrivacy] = useState("public");

  const videoUrlRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const tagRef = useRef(null);
  const thumbnailRef = useRef(null);
  const thumbRef = useRef(null);
  const [thumbnail, setThumbnail] = useState();
  const [thumbnailURL, setThumbnailURL] = useState();

  const getThumbnail = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // thumbRef.current.src = reader.result;
      console.log(reader.result);
    };

    setThumbnail(e.target.files[0]);
    console.log(thumbnail);

    let data = new FormData();
    data.set("file", file);

    let res = await fetch("/api/mediagur", {
      method: "POST",
      body: data,
    });

    let response = await res.json();
    console.log("Thumbnail :- ", response);
    setThumbnailURL(response.fileurl)
  };

  const uploadVideo = async () => {
    try {
      // Get field values from refs
      const videoUrl = videoUrlRef.current.value;
      const title = titleRef.current.value;
      const tags = tagRef.current.value;
      const thumbnail = thumbnailRef.current.value;
      const description = descriptionRef.current.value;

      // Validate if video URL is provided
      if (!videoUrl) {
        return alert("Please provide a video URL");
      }

      // Validate if title is provided
      if (!title) {
        return alert("Please provide a title");
      }

      // Validate if description is provided
      if (!description) {
        return alert("Please provide a description");
      }

      setUploading(true);

      // Send video data to backend for processing
      const response = await axios.post("/api/uploadVideo", {
        videoUrl,
        title,
        description,
        privacy,
        tags,
        thumbnailURL,
      });

      setUploading(false);

      // Display success message
      alert(response.data.message);
    } catch (error) {
      setUploading(false);
      console.error("Error uploading video:", error);
      alert("Error uploading video. Please try again.");
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-8 px-4">
      <div className="space-y-6">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center h-80">
          <Label htmlFor="videourl">
            <div
              className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
              size="lg"
              variant="outline"
            >
              <UploadIcon className="mr-2 h-5 w-5" />
              Upload Video
            </div>
          </Label>
          <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
            Drag and drop a video file or click to select <br />
            <Button
              variant="ghost"
              onClick={() => setremoteuploadmode(!remoteuploadmode)}
            >
              Remote Upload
            </Button>
          </p>
        </div>
        <div className="space-y-4">
          {remoteuploadmode && (
            <>
              <div>
                <Label htmlFor="videourl">Video URL</Label>
                <Input
                  ref={videoUrlRef}
                  id="videourl"
                  type="url"
                  placeholder="Enter a Video URL"
                />
              </div>
            </>
          )}
          <div>
            <Label htmlFor="title">Title</Label>
            <Input ref={titleRef} id="title" placeholder="Enter a title" />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              ref={descriptionRef}
              id="description"
              placeholder="Enter a description"
            />
          </div>
          <div>
            <Label htmlFor="tags">Tags</Label>
            <Input
              ref={tagRef}
              id="tags"
              placeholder="Add tags separated by commas"
            />
          </div>
          <div>
            <Label htmlFor="thumbnail">Thumbnail</Label>
            <input
              type="text"
              ref={thumbnailRef}
              hidden
              readOnly={true}
            />
            <Input id="thumbnail" type="file" onChange={getThumbnail} />
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <Card>
          <CardHeader>{/* <CardTitle>Video Preview</CardTitle> */}</CardHeader>
          <CardContent>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                alt="Video thumbnail"
                className="w-full h-full object-cover"
                height={360}
                src={thumbnailURL || "/placeholder.svg"}
                ref={thumbRef}
                style={{
                  aspectRatio: "640/360",
                  objectFit: "cover",
                }}
                width={640}
              />
            </div>
            <div className=" space-y-4 mt-4">
              <div>
                <Label htmlFor="privacy">Privacy</Label>
                <select
                  value={privacy}
                  onChange={(e) => setPrivacy(e.target.value)}
                  id="privacy"
                  className="w-full py-2 px-3 border dark:bg-slate-900 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-accent focus:ring-accent"
                >
                  <option value="public">Public</option>
                  <option value="unlisted">Unlisted</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="w-full">
            <Button
              className="w-full disabled:bg-black dark:text-white"
              onClick={uploadVideo}
            >
              UPLOAD
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
