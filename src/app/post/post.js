import prisma from "../../../prisma";
import { getUserSession } from "../../lib/sessions";
import fileurl from "../get/fileurl";




let PostPost = async ({content,file,name}) => {
    console.log("content",content);
    let user = await getUserSession()
    if (!content) return null
    if(file) {
        var n = name || "new name"
        url = await fileurl(file,n);
        console.log("New name: " , url);
        url = await url.fileurl;
        var type = 'image'
    } else {

        var url = null;
        var type = "text"
    }
    
    

    let post = await prisma.post.create({
        data : {
            content: content,
            authorId: user.id, 
            contentURL: url,
            type: type
        }
    })


  return post

}

export default PostPost;