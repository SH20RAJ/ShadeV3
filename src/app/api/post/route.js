import PostPost from "@/app/post/post";

export async function POST(req) {
  let data = await req.json();
  data = await PostPost(data);
  return Response.json(data);
}

export async function GET(req) {
  return new Response("Hello, Friends");
}