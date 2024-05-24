
"use client"
import { Button } from "@/components/ui/button";
import {
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
    TableBody,
    Table,
  } from "@/components/ui/table";
import Link from "next/link";
import { useEffect, useState } from "react";
  

  export  function UserVideos() {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("/api/getPostsWithAuth")
        .then((res) => res.json())
        .then((data) => {
          setVideos(data);
          setLoading(false);
        });
    }, []);

    return (
      <>
      {
        loading && <><UserVideoLoading/><UserVideoLoading/><UserVideoLoading/><UserVideoLoading/></>
      }
      
        {videos.map((video) => (
          <UserVideo key={video.id} video={video} />
        ))}

      </>
    );
  }

// components/SkeletonLoader.js
export default function UserVideoLoading() {
  return (
    <TableRow className="animate-pulse">
      <TableCell>
        <div className="skeleton-thumbnail aspect-square rounded-md bg-gray-200" style={{ width: "84px", height: "64px" }}></div>
      </TableCell>
      <TableCell className="font-medium">
        <div className="skeleton-text bg-gray-200 rounded-sm" style={{ width: "450px", height: "16px" }}></div>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <div className="skeleton-text bg-gray-200" style={{ width: "50px", height: "16px" }}></div>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <div className="skeleton-text bg-gray-200" style={{ width: "20px", height: "16px" }}></div>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <div className="skeleton-text bg-gray-200" style={{ width: "40px", height: "16px" }}></div>
      </TableCell>
      <TableCell>
        <div className="skeleton-button inline-flex items-center justify-center bg-gray-200" style={{ width: "50px", height: "32px" }}></div>
      </TableCell>
    </TableRow>
  );
}


  export function UserVideo({ video }) {
    return (
      <>
        <TableRow>
            <TableCell>
          <Link href={"/watch/" + video.id}>
              <img
                alt="Video Thumbnail"
                className="aspect-square rounded-md object-cover"
                height="64"
                src={video.image || "/placeholder.svg"}
                width="84"
              />
          </Link>
            </TableCell>
          <TableCell className="font-medium">
          <Link href={"/watch/" + video.id}>{video.title}</Link></TableCell>
          <TableCell className="hidden md:table-cell">{video.status}</TableCell>
          <TableCell className="hidden md:table-cell">
            {video.tempViews}
          </TableCell>
          <TableCell className="hidden md:table-cell">2.1K</TableCell>
          <TableCell>
            <Link href={"/studio/edit/" + video?.id}>
              <Button size="sm" variant="outline">
                Edit
              </Button>
            </Link>
          </TableCell>
        </TableRow>
      </>
    );
  }
  