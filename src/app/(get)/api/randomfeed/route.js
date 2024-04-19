import randomfeed from "@/app/get/randomfeed";




export  async function GET(req,res){
    console.log(req.nextUrl.searchParams);
    let limit = req.nextUrl.searchParams.get("limit") || 20;
    let skip = req.nextUrl.searchParams.get("skip") || 0;
    let orderBy = req.nextUrl.searchParams.get("orderBy") || "createdAt";
    let type = req.nextUrl.searchParams.get("type") ;

    let posts = await randomfeed({limit,type,skip,orderBy});


    return Response.json({
        status: "success",
        data: posts
    });
}