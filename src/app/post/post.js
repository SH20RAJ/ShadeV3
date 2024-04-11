import prisma from "../../../prisma";

let PostPost = async ({content,authorId}) => {
    if (!content) return null

    let post = await prisma.post.create({
        data : {
            content: content,
            authorId: authorId, 
        }
    })


  return post

}

export default PostPost;