import prisma from '../../../prisma';

export default async function post(id, userId = 1) {
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
      ...post,
      likeCounts,
      commentsCount: post._count.comments,
      userLiked,
    };
  }
console.log("post",post);
  return post ? post : null;
}