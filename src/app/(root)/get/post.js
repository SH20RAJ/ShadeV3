import prisma from '../../../prisma';
import { getServerSession } from 'next-auth';

export default async function post(id) {
let user = await getServerSession();
let email = user.user.email;

user = await prisma.user.findUnique({
  where: {
    email
  },
  select: {
    username: true,
    id: true,
  }
})
  // console.log("fefe",user÷2);
  // let email = user?.user.email || "sh@sh.com";
  // let user  = await prisma.user.findUnique({
  //   where: {
  //     email
  //   },
  //   select: {
  //     username: true,
  //     id: true,
  //   }
  // })
  let userId = user.id || 2
  var post = await prisma.post.findUnique({
    where: {
      status: "public",
      id: parseInt(id),
    },
    include: {
      author: {
        select: {
          username: true,
          name: true,
          avatar: true,
        },
      },
      likes: {
        where: {
          userId: parseInt(userId),
        },
        select: {
          reaction: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });

  if (post) {
    const likeCounts = post.likes.reduce((acc, like) => {
      acc[like.reaction] = (acc[like.reaction] || 0) + 1;
      return acc;
    }, { like: 0, love: 0, haha: 0, wow: 0, sad: 0, angry: 0, dislike: 0 });

    const userLiked = post.likes.length > 0 ? post.likes[0].reaction : null;

    delete post.likes;

    post = {
      userId,
      ...post,
      likeCounts,
      userId,
      commentsCount: post._count.comments,
      userLiked,

    };
  }
// console.log("post",post);
  return post ? post : null;
}