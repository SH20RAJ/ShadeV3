import prisma from "../../../prisma";
import { getUserSession } from "../sessions";




let PostPost = async ({content}) => {
    let user = await getUserSession()
    if (!content) return null

    let post = await prisma.post.create({
        data : {
            content: content,
            authorId: user.id, 
        }
    })


  return post

}

export default PostPost;