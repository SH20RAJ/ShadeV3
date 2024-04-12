import prisma from "../../../prisma";
import { user } from "../../../prisma/user";


let PostPost = async ({content,authorId}) => {
    if (!content) return null

    let post = await prisma.post.create({
        data : {
            content: content,
            authorId: await user.id, 
        }
    })


  return post

}

export default PostPost;