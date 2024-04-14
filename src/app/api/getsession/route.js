
import { getUserSession } from "@/lib/sessions";
export async function getuser() {
  return await getUserSession();
}

let user = await getuser();
// console.log(user);
export const GET = async () => {
    
return Response.json({ status:200, user: user})

}