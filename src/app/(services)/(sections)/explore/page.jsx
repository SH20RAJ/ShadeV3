import { Blogfeed } from "@/components/blogfeed";
import prisma from "../../../../../prisma";

let Page = async () => {
  let results = await prisma.$queryRawUnsafe(
    `SELECT * FROM Post where type = "article" ORDER BY RAND() LIMIT 30;`, // For MySQL and MariaDB
    // `SELECT * FROM Post ORDER BY RANDOM() LIMIT 30;`, // For PostgreSQL
  )
  return (
    <div>
      {results.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Page