import { getUserSession } from "@/lib/sessions";
import prisma from "../../../../../prisma";

export default async function createVideo(payload) {

    let user = await getUserSession()

    var {
        videoUrl,
        title,
        description,
        privacy,
        tags,
        thumbnailURL,
        id
      } = payload;


      
    let post = await prisma.post.update({
      where : {
        id: parseInt(payload.id),
        authorId: user.id
      },
        data : {
            content: description || " ",
            authorId: user.id, 
            contentURL: videoUrl,
            image: thumbnailURL,
            type: "video",
            title:title,
            // taglist:"tags",
            status:privacy
        }
    })

    return post;


  return ""
}
