import prisma from '../../../../prisma';

async function handler(req, res) {
  const { postId, userId , reaction } = await req.json();

  if (!postId || !userId) {
    return Response.json({ message: 'Post ID and User ID are required' });
  }

  try {
    // Check if the like already exists
    const existingLike = await prisma.like.findFirst({
      where: {
        postId: parseInt(postId),
        userId: parseInt(userId),
      },
    });


     if (existingLike) {

      if(existingLike.reaction == reaction) {
        // If like already exists, delete it
        var data = await prisma.like.delete({
          where: {
            id: existingLike.id,
          },
        });
  
      } else {


      // If like exists, update it with the new reaction type
      var data = await prisma.like.update({
        where: {
          id: existingLike.id,
        },
        data: {
          reaction: reaction,
        },
      });
        // If like already exists, update it with the new reaction type
      }

    } else {
      // If like does not exist, create a new one with the specified reaction type
      var data = await prisma.like.create({
        data: {
          postId: parseInt(postId),
          userId: parseInt(userId),
          reaction: reaction,
        },
      });
    }

    return Response.json({ message: 'Success',  data});
  } catch (error) {
    console.error('Request error', error);
    Response.json({ error: 'Error liking/unliking post', details: error.message });
  }
}

export { handler as POST };