import Card from "./Card";
import posts from "../get/posts";
import CreatePost from "./CreatePost";
import { shuffleArray } from "@/lib/utils";


export default async function ProjectSec() {
  
  let p = await posts();

  p = (1)?shuffleArray(p):p;
  // console.log(p);
  return (
    <>
      <div className="projects-section">
        <div className="projects-section-header">
            <CreatePost/>
        </div>
        <div className="projects-section-line">
          <div className="projects-status">
            {/* <div className="item-status">
              <span className="status-number">45</span>
              <span className="status-type">In Progress</span>
            </div>
            <div className="item-status">
              <span className="status-number">24</span>
              <span className="status-type">Upcoming</span>
            </div>
            <div className="item-status">
              <span className="status-number">62</span>
              <span className="status-type">Total Projects</span>
            </div> */}
          </div>
          <div className="view-actions">
            <button className="view-btn list-view" title="List View">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-list"
              >
                <line x1={8} y1={6} x2={21} y2={6} />
                <line x1={8} y1={12} x2={21} y2={12} />
                <line x1={8} y1={18} x2={21} y2={18} />
                <line x1={3} y1={6} x2="3.01" y2={6} />
                <line x1={3} y1={12} x2="3.01" y2={12} />
                <line x1={3} y1={18} x2="3.01" y2={18} />
              </svg>
            </button>
            <button className="view-btn grid-view active" title="Grid View">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-grid"
              >
                <rect x={3} y={3} width={7} height={7} />
                <rect x={14} y={3} width={7} height={7} />
                <rect x={14} y={14} width={7} height={7} />
                <rect x={3} y={14} width={7} height={7} />
              </svg>
            </button>
          </div>
        </div>
        <div className="project-boxes jsGridView ">
        
        <div className="postcontainer flex flex-wrap justify-around">
           {p.map((post, i) => (
          <div className=" w-full box-border md:w-[40%]  m-2">
          <Card key={post.id || i} post={post}>
          </Card>
          </div>
        ))}
        </div>
       

          
        </div>
      </div>
    </>
  );
}
