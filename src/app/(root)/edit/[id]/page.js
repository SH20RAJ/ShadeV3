import prisma from "../../../../prisma";
import Articles from "../../../compo/Articles";
import RightBar from "../../../compo/RightBar";
import EditNew from "./EditNew";
export default async function Home({params}) {

  let postId = params.id;
  let post = await prisma.post.findUnique({
    where: {
      id: parseInt(postId)
    },
    select: {
      id: true,
      title: true,
      content: true,
      type: true,
      author: {
        select: {
          username: true,
          avatar: true
        }
      }
    }
  })
console.log(post);


  
  return (
    <>
    <div className="projects-section">
      <EditNew post={post}/>
    </div>
      <RightBar>
        <Articles/>
      </RightBar>
    </>
  );
}
