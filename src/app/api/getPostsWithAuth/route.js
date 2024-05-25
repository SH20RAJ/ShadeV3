import { getPostsWithAuth } from "./getPostWithAuth";


export async function GET() {
  let post = await getPostsWithAuth();
  return Response.json(post);
}