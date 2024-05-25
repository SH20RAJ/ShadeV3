import { getUserSession } from "@/lib/sessions";
import prisma from "../../../../../prisma"


export default async function getUserDetails(id) {
    let id2 = await getUserSession();
    !id ? id = id2.id : id = id;

    let user = await prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            username: true,
            email: true,
            name: true,
            bio: true,
            avatar: true
        }
    });
    return user;


}
