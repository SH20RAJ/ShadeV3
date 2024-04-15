import prisma from "../../../prisma";

export default async function posts(options) {
    const limit = options && options.limit !== undefined ? options.limit : 20;
    const skip = options && options.skip !== undefined ? options.skip : 0;
    const orderBy = options && options.orderBy !== undefined ? options.orderBy : "createdAt";
    let typeFilter = {};
    if (options?.type) {
        typeFilter = {
            type: options.type
        };
    }
    
    let posts = await prisma.post.findMany({
        where: {
            status: "public",
            ...typeFilter
        },
        take: parseInt(limit),
        skip: parseInt(skip),
        orderBy: {
            [orderBy]: "desc"
        },
        include: {
            author: {
                select: {
                    username: true,
                    name: true,
                    avatar: true,
                }
            },
            likes: {
                select: {
                    reaction: true, // Include the reaction type of each like
                }
            },
            _count: {
                select: {
                    comments: true, // Count the comments for each post
                }
            }
        }
    });

    // Manually count likes based on reaction type for each post, ensuring like and haha are initialized to 0
    posts = posts.map(post => {
        const initialCounts = { like: 0, love: 0, haha: 0, wow: 0, sad: 0, angry: 0, dislike: 0 };
        const likeCounts = post.likes.reduce((acc, like) => {
            acc[like.reaction] = (acc[like.reaction] || 0) + 1;
            return acc;
        }, initialCounts);

        // Remove the detailed likes to only include the counts
        delete post.likes;

        return {
            ...post,
            likeCounts, // Include the aggregated like counts by reaction type
            commentsCount: post._count.comments // Include the count of comments
            
        };
    });

    // Adding additional information
    posts = {
        count: posts.length,
        skipped: parseInt(skip),
        type: options?.type || "any", // Using options.type here
        data: posts, // Changed from ...posts to avoid overwriting properties
    };

    // console.log(posts);

    return posts;
}
