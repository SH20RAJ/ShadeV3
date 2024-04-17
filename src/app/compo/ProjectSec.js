'use client'
import Card from "./Card";

// import CreatePost from "./CreatePost";
import { shuffleArray } from "@/lib/funcs";
import TextFeed from "./feeds/text";



export default async function ProjectSec() {
  // let p = await posts();
  // p = p.data


  // p = 0 ? shuffleArray(p) : p; //shuffle array or not
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
            
            <TextFeed/>

          </div>
        </div>
      </div>
    </>
  );
}
