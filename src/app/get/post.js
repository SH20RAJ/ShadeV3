import prisma from "../../../prisma";

export default async function post(id) {
  
    let posts = await prisma.post.findUnique(
        {
            where: {
                status: "public",
                id: parseInt(id)
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
    


    return (posts)? posts: null;
}
