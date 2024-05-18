import prisma from "../../../../../prisma";







export async function getPost(id) {
    let post = await prisma.post.findUnique({
        where: {
            id: parseInt(id)
        },
        include: {
            author: {
                select: {
                    username: true,
                    avatar: true,
                    name: true
                }
            }
        }

    });
    return post;
}



