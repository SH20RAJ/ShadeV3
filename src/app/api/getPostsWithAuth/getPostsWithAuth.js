import prisma from "../../../../prisma";
import { getUserSession } from "@/lib/sessions";

export async function getPostsWithAuth() {
  let user = {
    id: 1,
  };

  console.log(user);
  
  let user2 =  await  getUserSession();

let type = "video";

user = user2 || user;


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
