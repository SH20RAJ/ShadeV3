
import getUserDetails from "@/app/(root)/settings/funcs/getUserDetails";

// console.log(user);
export const GET = async () => {
  
  let user = await getUserDetails(); 
  
  
return Response.json({ status:200, user: user})

}