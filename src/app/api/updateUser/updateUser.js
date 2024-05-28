import { getUserSession } from "@/lib/sessions";
import prisma from "../../../../prisma"

export default async function updateUser(data) {

    // let user = await prisma.user.findUnique({
    //     where: {
    //         id: parseInt((await getUserSession()).id)
    //     },
    // });

    // if (!user) {
    //     throw new Error("User not found");
    // }

    let updateingUser = await prisma.user.update({
        where: {
            id: parseInt((await getUserSession()).id)
        },
        data: {
            username: data.username,
            name: data.fullName,
            email: data.email,
            avatar: data.profileImage
        },
    });

  return updateingUser || { error: "Failed to update user", status: 500, message: "Login to update user"};
  
}
