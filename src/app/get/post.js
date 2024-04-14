import prisma from "../../../prisma";

export default async function post(id) {
    let post = await prisma.post.findUnique({
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
                select: {
                    reaction: true, // Include the reaction type of each like
                },
            },
            _count: {
                select: {
                    comments: true, // Count the comments for the post
                }
            }
        },
    });

    if (post) {
        // Initialize counts for all reaction types to 0
        const initialCounts = { like: 0, love: 0, haha: 0, wow: 0, sad: 0, angry: 0, dislike: 0 };
        const likeCounts = post.likes.reduce((acc, like) => {
            acc[like.reaction] = (acc[like.reaction] || 0) + 1;
            return acc;
        }, initialCounts);

        // Remove the detailed likes to only include the counts
        delete post.likes;

        // Add the likeCounts and commentsCount to the post object
        post = {
            ...post,
            likeCounts, // Include the aggregated like counts by reaction type
            commentsCount: post._count.comments // Include the count of comments
        };
    }

    return post ? post : null;
}