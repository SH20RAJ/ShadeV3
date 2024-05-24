import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import fetchUserVideos from "./funcs/fetchUserVideos";
import Link from "next/link";

export default function VideoTable() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="hidden md:table-cell">Views</TableHead>
            <TableHead className="hidden md:table-cell">Likes</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <UserVideos />
        </TableBody>
      </Table>
    </>
  );
}

export async function UserVideos({ video }) {
  var videos = await fetchUserVideos();

  return (
    <>
      {videos.map((video) => (
        <UserVideo key={video.id} video={video} />
      ))}
    </>
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
