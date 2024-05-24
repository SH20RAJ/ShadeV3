// src/app/api/getPostWithAuth/route.js
import { getPostWithAuth } from "./getPostWithAuth";

export async function GET(req) {
    const id = req.nextUrl.searchParams.get("id");
    const post = await getPostWithAuth( id); // {} is a placeholder for res, which is not actually used in this context
    console.log(post);
    return Response.json(post);
}
