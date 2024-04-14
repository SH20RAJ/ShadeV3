// import { getUserSession } from "../../../lib/sessions";
// let user = await getUserSession()



//  export const POST = async () => {
//     return Response.json(user);
//  }


import { getUserSession } from "@/lib/sessions";
let user = await getUserSession()


export default async function Session() {
    return (
        <>
        {JSON.stringify(user)}
        </>
    )
}
