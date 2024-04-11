import Encriptor from "encriptorjs";
import prisma from "../../../../prisma/index";
import {NextResponse} from "next/server"
export async function POST(req, res, next) {

  let payload = await req.json();
  console.log("payload",payload);

  const user = await prisma.user.create({
    data: {
      username: payload.username,
      email: payload.email,
      password: payload.password,
    }
  });
  console.log(user);
  user.password = undefined;

  if(user){
    const key = process.env.TOKEN_SECRET || '1234';    
    const encryptedText = Encriptor.encrypt(btoa(user.username), key);
    let token = encryptedText
    let responce = NextResponse.json({ success: true, message: "User Created", 
    data: { user: user }
   });
    responce.cookies.set({
      name : "token",
      value : token,
      maxAge: 95 * 60 * 60 * 24
    })

    return responce;
  }else {
    return Response.json({
      success: false,
      message: "Something wents wrong",
      data: { user: user },
      status: 400,
    });
  }

}

