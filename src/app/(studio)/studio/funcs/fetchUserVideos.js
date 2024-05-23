import user from "@/app/(root)/get/user";
import prisma from "../../../../../prisma";

export default async function fetchUserVideos() {
  let videos = await prisma.post.findMany({
    where: {
      authorId: user.id,
      type: "video",
    }});


    return videos;
}
