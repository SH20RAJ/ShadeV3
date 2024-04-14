import prisma from "../../../../prisma/index";
import {  NextResponse} from "next/server"
import Encriptor from 'encriptorjs';


export async function POST(req, res, next) {

  let payload = await req.json();
  // console.log("payload",payload);

  const user = await prisma.user.findMany({
    where: {
      username: payload.username,
      password: payload.password
    }
  });
  // console.log(user);

  if(user){
    const key = process.env.TOKEN_SECRET || '1234';
    console.log("key",btoa(user[0].username));
    
    const encryptedText = Encriptor.encrypt(btoa(user[0].username), key);
    let token = encryptedText

    let responce = NextResponse.json({ success: true,
      message: "User logged in Successfully", 
      username: user[0].username

  });
  responce.cookies.set({
    name : "token",
    value : token,
    maxAge: 95 * 60 * 60 * 24
  })
    return responce;
  }else {
    return NextResponse.json({
      success: false,
      message: "Something wents wrong",
      data: { user: user },
      status: 400,
    });
  }

}

