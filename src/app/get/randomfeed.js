import prisma from "../../../prisma"

let randomfeed = async ({type,limit}) => {

    let filter = ""
    if(type) {filter = 'where type = "article"'}


  let results = await prisma.$queryRawUnsafe(
    `SELECT * FROM Post ${filter} ORDER BY RAND() LIMIT ${limit || 20};`, // For MySQL and MariaDB
    // `SELECT * FROM Post ORDER BY RANDOM() LIMIT 30;`, // For PostgreSQL
  )
  return results
}

export default randomfeed