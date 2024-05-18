import post from "@/app/get/post";
import Card from "../../compo/Card";
import RightBar from "@/app/compo/RightBar";
import Articles from "@/app/compo/Articles";
import { getPost } from "@/app/(get)/api/getPost/getPost";

let Page = async ({params}) => {
let id = params.id[0]
// let postx = await post(id)
let postx = await getPost(id);

if (!postx) return (<center className="text-center w-full">Post Not Found 🤔</center>);
  return(
          <>
          
          <div className="projects-section">
          <div className=" container flex w-full flex-col md:flex-row">
            <div className="w-full flex justify-center">

           <Card post={postx} /> 
            </div>
           {/* <div className="side md:w-[40%] h-screen">

           </div> */}
           
          </div>

          </div>

            <RightBar>
              <Articles/>
            </RightBar>

          </>

    )

}

export default Page;