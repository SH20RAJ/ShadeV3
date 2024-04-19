import prisma from "../../../prisma"

let randomfeed = async ({type}) => {

    let filter = ""
    if(type) {filter = 'where type = "article"'}

  let results = await prisma.$queryRawUnsafe(
    `SELECT * FROM Post ${filter} ORDER BY RAND() LIMIT 30;`, // For MySQL and MariaDB
    // `SELECT * FROM Post ORDER BY RANDOM() LIMIT 30;`, // For PostgreSQL
  )
  return results
}

export default randomfeed