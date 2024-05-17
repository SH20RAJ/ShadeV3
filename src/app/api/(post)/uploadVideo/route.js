import createVideo from "./createVideo";






export async function POST(req,res){

    let payload = await req.json();
    console.log("payload",payload);
    var {
        videoUrl,
        title,
        description,
        privacy,
        tags,
        thumbnailURL,
      } = payload;


    //   console.log("videoUrl",videoUrl);
    //   console.log("title",title);
    //   console.log("description",description);
    //   console.log("privacy",privacy);
    //   console.log("tags",tags);
    //   console.log("thumbnailURL",thumbnailURL);


    const post = await createVideo(payload);




    return Response.json({
        status:200,
        message: "Video Uploaded Successfully ✨",
        post
    });
}























export async function GET(req,res){



    return Response.json()
}