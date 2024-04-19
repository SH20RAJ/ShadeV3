// import DOMPurify from 'isomorphic-dompurify';

import { getUserSession } from "@/lib/sessions";
import prisma from "../../../../prisma";
import fileurl from "@/app/get/fileurl";




let UpdatePost = async ({content = null,file,name,title = null,type,id}) => {

    // content = DOMPurify.sanitize(content);
    // console.log("content",content);
    let user = await getUserSession()
    // if (!content) return null
    if(file) {
        // console.log("file available",file);
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
    
    

    let post = await prisma.post.update({
        where: {
            id: id,
            authorId: user.id
        },
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

export default UpdatePost;