import prisma from "../../../prisma"

let randomfeed = async ({type,limit}) => {

    let filter = ""
    if(type) {filter = 'where type = "' + type+'"'}


  let results = await prisma.$queryRawUnsafe(
    `SELECT * FROM Post ${filter} ORDER BY RAND() LIMIT ${limit || 20};`, // For MySQL and MariaDB
  )
  return results
}

export default randomfeed