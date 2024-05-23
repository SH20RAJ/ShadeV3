import prisma from "../../../../prisma";
import { getuser } from "@/lib/user";

export async function getPostWithAuth(id) {
let user = await getuser();
console.log(user.id);


  let post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
      authorId: parseInt(user.id),
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
