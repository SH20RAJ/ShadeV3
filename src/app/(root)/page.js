import Articles from "../compo/Articles";
import RightBar from "../compo/RightBar";
import ProjectSec from "../compo/ProjectSec";
export default function Home() {
  return (
    <>

      <ProjectSec/>
      
      <RightBar>
        <Articles/>
      </RightBar>

    
    </>
  );
}

// export const revalidate = 10;
