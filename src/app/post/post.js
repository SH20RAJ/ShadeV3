import prisma from "../../../prisma";
import { getUserSession } from "../../lib/sessions";
import fileurl from "../get/fileurl";




let PostPost = async ({content = null,file,name,title = null,type}) => {
    console.log("content",content);
    let user = await getUserSession()
    // if (!content) return null
    if(file) {
        console.log("file available",file);
        var n = name || "new name"

        url = await fileurl(file,n);
        console.log("New name: " , url);
        // url = await url.fileurl;
        var type = 'image'
        
    } else {
        if(type === "article") {
            type = 'article'
        } else {
           var url = null;
           var type = "text"
            if(content.length > 1000){
                type = 'article'
            }  
        }
       
    }
    
    

    let post = await prisma.post.create({
        data : {
            content: content,
            authorId: user.id, 
            contentURL: url,
            image: url,
            type: type,
            title:title
        }
    })


  return post

}

export default PostPost;