import { getServerSession } from 'next-auth';


export default async function getuser(){
    let user = await getServerSession()
    console.log("test/getuser", user);
    return user;

}