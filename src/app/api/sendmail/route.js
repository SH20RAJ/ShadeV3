import Email from "@/lib/resend"




export const POST = async () => {
    let to = "sh20raj@gmail.com";
    let subject = "Subject Here";
    let html = "<b>Content</b>";

    let data = await Email(to,subject,html)
    console.log(data);
    return Response.json({msg: "data"})
}