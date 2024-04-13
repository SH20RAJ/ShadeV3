import user from "@/lib/user"


console.log("user",user);

export default async function page() {
  return (
    <div>
      {/* {JSON.stringify(session())} - Here is the session */}
      {JSON.stringify(await user)} - User session
    </div>
  )
}
