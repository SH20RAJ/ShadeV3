
import { getUserSession } from "./sessions";
export async function getuser() {
  return await getUserSession();
}

let user = await getuser();
export default user ;