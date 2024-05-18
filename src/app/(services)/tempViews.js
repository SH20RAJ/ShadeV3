import prisma from "../../../prisma";




export const tempViews = async (id) => {
    const post = await prisma.post.update({
        where: { id: parseInt(id, 10) },
        data: { tempViews: { increment: 1 } },
      });
    return post
}