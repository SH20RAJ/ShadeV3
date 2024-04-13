import Articles from "./compo/Articles";
import MessageSec from "./compo/MessageSec";
import ProjectSec from "./compo/ProjectSec";
export default function Home() {
  return (
    <>

      <ProjectSec/>
      <MessageSec>
        <Articles/>
      </MessageSec>

    
    </>
  );
}
