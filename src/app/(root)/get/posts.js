import prisma from "../../../../prisma";


export default async function posts(options) {
    const limit = options?.limit !== undefined ? options.limit : 20;
    let skip = options?.skip !== undefined ? options.skip : 0;
    const orderBy = options?.orderBy !== undefined ? options.orderBy : "createdAt";
    const page = options?.page !== undefined ? Math.max(options.page, 1) : 1;
    let email = options.user?.user.email || "sh@sh.com";
    let user  = await prisma.user.findUnique({
        where: {
            email
        },
        select: {
            username: true,
            id: true,
    }
    })
    let userId = (await  user.id)

    let typeFilter = {};
    let postFilter = {};
    let userFilter = {};

    if (options?.type) {
        typeFilter = {
            type: options.type
        };
    }
    if (options?.userId) {
        userFilter = {
            userId: parseInt(options.userId)
        };
    }
    if (options?.postId) {
        userFilter = {
            id: parseInt(options.postId)
        };
    }

    console.log(typeFilter);

    let filter = {
       ...postFilter,
       ...userFilter,
       ...typeFilter
    };


    if (page > 1) {
        skip = (page - 1) * limit;
    }

    let posts = await prisma.post.findMany({
        where: {
            status: "public",
            ...filter
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
                    userId: true
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

    // console.log(posts[0].likes);

posts = posts.map(post => {
    const initialCounts = { like: 0, love: 0, haha: 0, wow: 0, sad: 0, angry: 0, dislike: 0 };
    const likeCounts = post.likes.reduce((acc, like) => {
        acc[like.reaction] = (acc[like.reaction] || 0) + 1;
        return acc;
    }, initialCounts);

    const userLike = post.likes.find(like => like.userId === userId); // Assuming each like has a userId field
    const userLiked = userLike ? userLike.reaction : null;

    // Check if type is 'article' and trim content to first 100 words
    if (options?.type === 'article' && post.content) {
        const words = post.content.split(/\s+/).slice(0, 100).join(' ');
        post.content = words + (post.content.split(/\s+/).length > 100 ? '...' : '');
    }

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
        userId,
        count: posts.length,
        skipped: parseInt(skip),
        type: options?.type || "any",
        page: page,
        totalPages: totalPages,
        data: posts,
    };

    return posts;
}