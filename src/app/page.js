import MessageSec from "./compo/MessageSec";
import Messages from "./compo/Messages";
import ProjectSec from "./compo/ProjectSec";
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
