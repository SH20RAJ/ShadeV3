import fileurl from "@/app/(root)/get/fileurl";

export async function POST(req) {
  let data = await req.json();
  let file = await data.file;
  let url = await fileurl(file);
  if(url){
    return Response.json(url);
  } else {
    return null;
  }
}

export async function GET(req) {
  return new Response("Hello, Friends");
}