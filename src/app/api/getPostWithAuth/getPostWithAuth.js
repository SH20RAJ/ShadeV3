// src/app/api/getPostWithAuth/getPostWithAuth.js
import { getUserSession } from "@/lib/sessions";
import prisma from "../../../../prisma";

export async function getPostWithAuth( id) {
    let user = await getUserSession()
    console.log(user.id);

    let post = await prisma.post.findUnique({
        where: {
            id: parseInt(id),
            authorId: parseInt(user.id),
        },
        include: {
            author: {
                select: {
                    username: true,
                    avatar: true,
                    name: true,
                    id: true,
                },
            },
        },
    });
    return post;
}
