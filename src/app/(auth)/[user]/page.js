// import { getUserSession } from "../../../prisma/sessions";
import Card from "../../compo/Card";
import user from "../../get/user";
// let user = await getUserSession();

let Page = async ({params}) => {
    let username = params.user;
    let userdata = await user(username || 'shaswat');
    return (
    <>




    <div className="wrapper w-full flex justify-center">

    
      <div className="w-full md:w-2/3 overflow-auto border border-gray-200 rounded-lg shadow ">
        <div className="flex justify-end px-4 pt-4">
        </div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={userdata.avatar}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">
            {userdata.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {userdata.bio}
          </span>
          <div className="flex mt-4 md:mt-6">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Follow
            </a>
            <a
              href="#"
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              Message
            </a>
          </div>
        </div>
        <div className="postscontainer">
            {userdata?.posts?.map((post,i) => <Card key={i} post={post}/>)}
        </div>
      </div>
      
      </div>
    </>
  );
};

export default Page;
