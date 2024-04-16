import prisma from "../../../../../prisma"

export async function getimages() {
    let images = await prisma.post.findMany({
        where: {
            type : "image"
        }
    })
  return images || null
}
