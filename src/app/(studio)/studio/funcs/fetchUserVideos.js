
import { getuser } from "@/lib/user";

import prisma from "../../../../../prisma";

export default async function fetchUserVideos() {

  var user = await getuser();
  let videos = await prisma.post.findMany({
    where: {
      authorId: user.id,
      type: "video",
    }});


    return videos;
}
