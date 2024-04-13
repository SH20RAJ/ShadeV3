import prisma from "../../../prisma";
import { getUserSession } from "../../lib/sessions";
import fileurl from "../get/fileurl";




let PostPost = async ({content,file,name}) => {
    console.log("content",content);
    let user = await getUserSession()
    if (!content) return null
    if(!file) file =  null
    let n = name || "new name"
    let url = await fileurl(file,n);
    console.log("New name: " , url);
    url = await url.fileurl;

    let post = await prisma.post.create({
        data : {
            content: content,
            authorId: user.id, 
            contentUrl: url,
            type: "image"
        }
    })


  return post

}

export default PostPost;