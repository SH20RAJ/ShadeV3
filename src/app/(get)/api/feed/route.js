

import posts from '@/app/get/posts'
import getuser from '@/app/test/getuser';

const GET = async (req,res) => {
  let user = await getuser();

    
    let url = new URL(req.url)
    let limit = url.searchParams.get("limit") || 20;
    let skip = url.searchParams.get("skip") || 0;
    let orderBy = url.searchParams.get("orderBy") || "createdAt";
    let type = url.searchParams.get("type") ;
    let page = url.searchParams.get("page") ;
    let postId = url.searchParams.get("postId") ;
    let body = await posts({limit,skip,orderBy,type,page,user,postId});

    return Response.json({ success: true, data: body})
}

export {GET}
