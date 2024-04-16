import prisma from "../../../prisma";

export default async function posts(options, userId = 1) {
    const limit = options?.limit !== undefined ? options.limit : 20;
    let skip = options?.skip !== undefined ? options.skip : 0;
    const orderBy = options?.orderBy !== undefined ? options.orderBy : "createdAt";
    const page = options?.page !== undefined ? Math.max(options.page, 1) : 1;

    let typeFilter = {};
    if (options?.type) {
        typeFilter = {
            type: options.type
        };
    }

    if (page > 1) {
        skip = (page - 1) * limit;
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
                // where: {
                //     userId: userId
                // },
                select: {
                    reaction: true,
                }
            },
            _count: {
                select: {
                    comments: true,
                    likes: true,
                }
            }
        }
    });

    console.log(posts[0].likes);

    posts = posts.map(post => {

        const initialCounts = { like: 0, love: 0, haha: 0, wow: 0, sad: 0, angry: 0, dislike: 0 };
        const likeCounts = post.likes.reduce((acc, like) => {
            acc[like.reaction] = (acc[like.reaction] || 0) + 1;
            return acc;
        }, initialCounts);

        const userLiked = post.likes.length > 0; // Check if user with ID 5 liked this post

        delete post.likes;

        return {
            ...post,
            likeCounts,
            commentsCount: post._count.comments,
            userLiked: userLiked
        };
    });

    const totalCount = await prisma.post.count({
        where: {
            status: "public",
            ...typeFilter
        }
    });

    const totalPages = Math.ceil(totalCount / limit);

    posts = {
        count: posts.length,
        skipped: parseInt(skip),
        type: options?.type || "any",
        page: page,
        totalPages: totalPages,
        data: posts,
    };

    return posts;
}