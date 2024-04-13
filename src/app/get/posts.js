import prisma from "../../../prisma";

export default async function posts(random) {
  
    let posts = await prisma.post.findMany(
        {
            where: {
                status: "public"
            },
            orderBy: {
                createdAt: "desc"
            },
            include :{
                author: 
                {
                select : {
                    username: true,
                    name: true,
                    avatar:true,
                }
                }
            }
        }
    )

return (random)? randomPosts : posts;
}
