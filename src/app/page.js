import MessageSec from "./compo/MessageSec";
import Messages from "./compo/Messages";
import ProjectSec from "./compo/ProjectSec";
console.log("hi");
export default function Home() {
  return (
    <>

      <ProjectSec/>
      <MessageSec>
        <Messages/>
      </MessageSec>

    
    </>
  );
}
