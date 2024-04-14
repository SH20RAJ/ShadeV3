import prisma from '../../../../prisma';

  async function handler(req, res) {
    // console.log("fdewfrewF",req.body);
    var { postId, userId, reaction } = await req.json();
    // postId = 3; userId = 7; // Hardcoded for demonstration, remove or replace in production

    // Validate reaction type
    // const validReactions = ['like', 'love', 'haha', 'wow', 'sad', 'angry', 'dislike'];
    // if (!validReactions.includes(reaction)) {
    //     return Response.json({ message: 'Invalid reaction type' });
    // }

    if (!postId) {
        return Response.json({ message: 'Post ID and User ID are required' });
    }
    reaction = (reaction)?reaction:"like";
    // reaction = (reaction)?reaction:"like";

    try {
        // Check if the like already exists
        const existingLike = await prisma.like.findFirst({
            where: {
                postId: parseInt(postId),
                userId: parseInt(userId),
                // Ensure to check for the specific reaction type as well
                reaction: reaction,
            },
        });

        if (existingLike) {
            // If like exists with the same reaction, remove it
            await prisma.like.delete({
                where: {
                    id: existingLike.id,
                },
            });
        } else {
            // If like does not exist or different reaction, create or update it
            // This part assumes you want to change the reaction if it's different
            // First, remove any existing like regardless of its reaction type
            await prisma.like.deleteMany({
                where: {
                    postId: parseInt(postId),
                    userId: parseInt(userId),
                },
            });
            // Then, create a new like with the specified reaction
            await prisma.like.create({
                data: {
                    postId: parseInt(postId),
                    userId: parseInt(userId),
                    reaction: reaction, // Use the provided reaction type
                },
            });
        }

        return Response.json({ message: 'Success' });
    } catch (error) {
        console.error('Request error', error);
        Response.json({ error: 'Error liking/unliking post', details: error.message });
    }
}

export { handler as POST }