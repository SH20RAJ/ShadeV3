import { getPostsWithAuth } from "./getPostWithAuth";


export async function GET(req, res) {
console.log(req.json());

  let post = await getPostsWithAuth();

  return Response.json(post);
}