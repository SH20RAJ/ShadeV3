"use client";
import { useSession } from "next-auth/react";
import Articles from "../../compo/Articles";
import CreateNew from "../../compo/createnew/CreateNew2";
import RightBar from "../../compo/RightBar";
import { redirect } from "next/navigation";
export default async function Home() {
  const { data: session, status } = useSession();

  if(!session) redirect("/")

  
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
