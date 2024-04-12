import {user} from '../../../prisma/user'

export default async function Home() {
  // const user = await getUserSession()
  if(!user) return <>No User</>
  return <main className="">dqd - {JSON.stringify(user)}</main>
}