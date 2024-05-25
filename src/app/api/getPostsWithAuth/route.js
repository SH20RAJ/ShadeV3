import { getPostsWithAuth } from "./getPostsWithAuth";


export async function GET() {
  let post = await getPostsWithAuth();
  console.log(post);
  return Response.json(post);
}