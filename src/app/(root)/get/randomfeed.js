import prisma from "../../../../prisma";

let randomfeed = async ({
  type,
  limit = 20,
  skip = 0,
  orderBy,
}) => {
  let filter = "";
  if (type) {
    filter = "WHERE Post.type = ?";
  }

  let orderClause = "ORDER BY RAND()";

  if(orderBy == "latest"){
    orderClause = "ORDER BY Post.createdAt DESC";
  }
  else if(orderBy == "popular"){
    orderClause = "ORDER BY Post.tempViews DESC";
  }
  else if(orderBy == "trending"){
    orderClause = "ORDER BY Post.tempViews DESC";
  }
  else if(orderBy == "random"){
    orderClause = "ORDER BY RAND()";
  }
  
  const results = await prisma.$queryRawUnsafe(
    `SELECT 
    Post.id,
    Post.content,
    Post.taglist,
    Post.image,
    Post.contentURL,
    Post.title,
    Post.type,
    Post.createdAt ,
    Post.updatedAt ,
    Post.tempViews ,
    Post.status,
    JSON_OBJECT(
        'id', User.id,
        'username', User.username,
        'email', User.email,
        'name', User.name,
        'bio', User.bio,
        'avatar', User.avatar,
        'coverPhoto', User.coverPhoto,
        'createdAt', User.createdAt,
        'updatedAt', User.updatedAt,
        'status', User.status
    ) AS user
FROM 
    Post
JOIN 
    User ON Post.authorId = User.id
WHERE 
    Post.type = ${"'"+type+"'"} OR 'video'
    ${
      orderClause
    }

`
    // type ? [type, limit, skip] : [limit, skip]
  );

  // return results;

  return results.map((post) => ({
    ...post,
    user: JSON.parse(post.user), // parse the JSON string into an object
  }));
};

export default randomfeed;
