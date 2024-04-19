import { Blogfeed } from "./compo/Blogfeed";
import NewsFeeds from "./compo/NewsFeeds";

let Page = async () => {

  return(
          <>
          <div className="w-full mx-auto">
          <Blogfeed/>
          <NewsFeeds/>

          </div>
          
                  
          
    
          </>

    )

}

export default Page;