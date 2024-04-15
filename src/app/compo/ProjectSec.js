import Card from "./Card";
import posts from "../get/posts";
// import CreatePost from "./CreatePost";
import { shuffleArray } from "@/lib/utils";
import CreateNew from "./CreateNew2";
import converter from "@/lib/showdown";



export default async function ProjectSec() {
  let p = await posts();


  p = 0 ? shuffleArray(p) : p; //shuffle array or not
  // console.log(p);
  return (
    <>
      <div className="projects-section">
        <div className="projects-section-header">
          {/* <CreateNew /> */}
        </div>
        {/* <div className="projects-section-line">
        </div> */}
        <div className="project-boxes jsGridView ">
          <div className="postcontainer flex flex-wrap justify-around">
            {p.map((post, i) => (
              <div
                key={post.id || i}
                className=" w-full box-border md:w-[40%]  m-2"
              >
                <Card post={post}></Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
