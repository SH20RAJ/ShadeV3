import { getServerSession } from 'next-auth';


export default async function getuser(){
    let user = await getServerSession()
    return user;

}