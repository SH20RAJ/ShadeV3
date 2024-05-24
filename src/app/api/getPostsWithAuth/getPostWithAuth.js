import prisma from "../../../../prisma";
import { getuser } from "@/lib/user";

export async function getPostsWithAuth(id) {
let user = await getuser();
console.log(user.id);

let type = "video";


  let post = await prisma.post.findMany({
    where: {
      // id: parseInt(id),
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
