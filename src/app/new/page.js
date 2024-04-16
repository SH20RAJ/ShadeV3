import user from "@/lib/user";
import Articles from "../compo/Articles";
import CreateNew from "../compo/createnew/CreateNew2";
import RightBar from "../compo/RightBar";
import { redirect } from "next/navigation";
export default async function Home() {

  if(!user) redirect("/")
  
  return (
    <>
    <div className="projects-section">
      <CreateNew/>
    </div>
      <RightBar>
        <Articles/>
      </RightBar>
    </>
  );
}
