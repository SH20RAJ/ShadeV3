

import posts from '@/app/get/posts'
import React from 'react'

const GET = async (req,res) => {
    
    let url = new URL(req.url)
    let limit = url.searchParams.get("limit") || 20;
    let skip = url.searchParams.get("skip") || 0;
    let orderBy = url.searchParams.get("orderBy") || "createdAt";
    let type = url.searchParams.get("type") ;
    let body = await posts({limit,skip,orderBy,type});
    console.log("body: " + body);
  return Response.json({ success: true, data: body})
}

export {GET}
