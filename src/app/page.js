import Header from "./compo/Header";
import MessageSec from "./compo/MessageSec";
import ProjectSec from "./compo/ProjectSec";
import  Sidebar from "./compo/Sidebar";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="app-content">
      <Sidebar/>
      <ProjectSec/>
      <MessageSec/>
    </div>
    
    </>
  );
}
