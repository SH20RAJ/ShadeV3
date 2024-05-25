import { getUserSession } from "@/lib/sessions";
import prisma from "../../../../prisma";

export async function getPostsWithAuth() {
  let user = await getUserSession()
  console.log(user.id);
  if (!user || !user.id) {
    throw new Error("User is not authenticated or user ID is missing.");
  }

let type = "video";


  let post = await prisma.post.findMany({
    where: {
      authorId: parseInt(user.id),
      type,
    },
    include: {
      author: {
        select: {
          username: true,
          avatar: true,
          name: true,
          id: true,
        },
      },
    },
  });
  return post;
}
