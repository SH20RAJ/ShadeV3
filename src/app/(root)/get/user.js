import prisma from "../../../../prisma";

export default async function user(username, id) {
    let user = await prisma.user.findFirst(
        {
            where: {
                OR: [
                    {
                        username: username
                    },
                    {
                        id: id
                    }
                ],
                status: "public"
            },
            include: {
                posts: {
                    where: {
                        status: "public"
                    },
                    include: {
                        author: {
                            select: {
                                username: true,
                                bio: true,
                                avatar: true
                            }
                        }
                    }
                }
            }
        }
    );
    if(!user) return false
    user.bio = (user?.bio ? user?.bio: "No bio available")
    user.avatar = (user?.avatar ? user?.avatar: "https://api.dicebear.com/8.x/adventurer/svg?seed="+user?.username)
    return user;
}