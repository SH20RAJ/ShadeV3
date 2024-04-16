import Articles from "../compo/Articles";
import CreateNew from "../compo/createnew/CreateNew2";
import RightBar from "../compo/RightBar";
export default function Home() {
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
