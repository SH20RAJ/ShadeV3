import { getPostWithAuth } from "./getPostWithAuth";


export async function GET(req, res) {
console.log(req.json());

  let post = await getPostWithAuth(req.nextUrl.searchParams.get("id"));
  return Response.json(post);
}