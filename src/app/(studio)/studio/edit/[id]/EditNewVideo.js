"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css';

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
import { redirect } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { getPost } from "@/app/(get)/api/getPost/getPost";



export default function EditNewVideo({id}) {
  const router = useRouter();
  
  const [remoteuploadmode, setremoteuploadmode] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [privacy, setPrivacy] = useState("public");

  const [videoUrl, setVideoUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [thumbnail, setThumbnail] = useState();
  const [thumbnailURL, setThumbnailURL] = useState('');
  
  const getThumbnail = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log(reader.result);
    };

    setThumbnail(file);

    let data = new FormData();
    data.set("file", file);

    let res = await fetch("/api/mediagur", {
      method: "POST",
      body: data,
    });

    let response = await res.json();
    console.log("Thumbnail :- ", response);
    setThumbnailURL(response.fileurl);
  };

  const uploadVideo = async () => {
    try {
      // Validate if video URL is provided
      if (!videoUrl) {
        toast.warn(`Enter Video URL`);
        return;
      }

      // Validate if title is provided
      if (!title) {
        toast.warn(`Please provide a title`);
        return;
      }

      // Validate if description is provided
      if (!description) {
        toast.warn(`Please provide a description`);
        return;
      }

      if (!thumbnailURL) {
        toast.warn(`Please provide a thumbnail`);
        return;
      }

      setUploading(true);

      // Send video data to backend for processing
      const response = await axios.post("/api/updateVideo", {
        videoUrl,
        title,
        description,
        privacy,
        tags,
        thumbnailURL,
        id
      });

      setUploading(false);

      // Display success message
      toast.success(response.data.message);
      console.log(response);
      console.log(response.message);
      setTimeout(() => {
        (() => {
          
          location.href = "/studio/?id="+response.data.post.id;
        })();
        
      }, 2000);
    } catch (error) {
      setUploading(false);
      console.error("Error uploading video:", error);
      alert("Error uploading video. Please try again.");
    }
  };

  const getVideoDetails = async () => {
    try {
      const response = await axios.get(
        `/api/getPostWithAuth?id=${id}`
      );

      console.log(response);
      const video = response.data;
      setTitle(video.title);
      setDescription(video.content);
      setThumbnailURL(video.image);
      setVideoUrl(video.contentURL);
      setPrivacy(video.status);
    } catch (error) {
      console.error("Error fetching video details:", error);
      // alert("Error fetching video details. Please try again.");
    }
  }

  useEffect(() => {
    
    return () => {
      getVideoDetails()
      
    };
  }, []);
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-8 px-4">
      <div className="space-y-6">
        {/* <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center h-80">
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

          
        </div> */}
        <div className="space-y-4">
          {remoteuploadmode && (
            <>
              <div>
                <Label htmlFor="videourl">Video URL</Label>
                <Input
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  id="videourl"
                  type="url"
                  placeholder="Enter a Video URL"
                />
              </div>
            </>
          )}
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              placeholder="Enter a title"
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Enter a description"
            />
          </div>
          <div>
            <Label htmlFor="tags">Tags</Label>
            <Input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              id="tags"
              placeholder="Add tags separated by commas"
            />
          </div>
          <div>
            <Label htmlFor="thumbnail">Thumbnail</Label>
            <Input
              type="text"
              value={thumbnailURL}
              onChange={(e) => setThumbnailURL(e.target.value)}
              placeholder="Enter a thumbnail URL"
              className="mb-4"
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
              {
                videoUrl && <video controls src={videoUrl} poster={thumbnailURL}></video>
              }
              <img
                alt="Video thumbnail"
                className="w-full h-full object-cover"
                height={360}
                src={thumbnailURL || "/placeholder.svg"}
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
              disabled={uploading}
            >
              UPDATE
            </Button>
          </CardFooter>
        </Card>
      </div>
      <ToastContainer />
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
