import Articles from "../compo/Articles";
import CreateNew from "../compo/createnew/CreateNew2";
import MessageSec from "../compo/MessageSec";
export default function Home() {
  return (
    <>
    <div className="projects-section">

      <CreateNew/>
    </div>
      <MessageSec>
        <Articles/>
      </MessageSec>
    </>
  );
}
