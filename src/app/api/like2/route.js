import prisma from '../../../../prisma/index'

export  async function POST(req, res) {
    const { postId, userId } = {postId:14,userId:2};

    try {
      // Check if the post and user exist
      const post = await prisma.post.findUnique({
        where: { id: parseInt(postId) },
      });

      const user = await prisma.user.findUnique({
        where: { id: parseInt(userId) },
      });

      if (!post || !user) {
        return Response.json({ error: 'Post or user not found' });
      }

      const checklikes = await prisma.like.findMany({
        where: {
          post: { id: post.id },
          user: { id: user.id },
        },
      })

      // console.log(checklikes);
      // console.log(checklikes.length);

      if(checklikes.length){
        return Response.json({ error: 'You have already liked this post' });
      }

      // Create a new Like
      const newLike = await prisma.like.create({
        data: {
          user: { connect: { id: user.id } },
          post: { connect: { id: post.id } },
        },
      });

      return Response.json(newLike);
    } catch (error) {
      console.error(error);
      return Response.json({ error: 'Internal Server Error' });
    }
  
}

export function GET(res){
  return Response.json({ error: 'Method Not Allowed' });
}