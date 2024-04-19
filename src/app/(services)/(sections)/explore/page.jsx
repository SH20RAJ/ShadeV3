import { RedditPosts } from "./compo/redditpposts"
import { ChirpCarousel, ChirpSidebar } from "../Chirp/page"
import { VideoComponent, YoutubeFeed } from "./compo/youtubefeed"

let Page = async () => {

  


  return (
    <>
    <div>
    <div className="w-full flex mb-0">
    <div className="w-2/3">
      <ChirpCarousel/>
      <RedditPosts/>

    </div>
    <div className="w-1/3">
        <ChirpSidebar/>
    </div>

    </div>

    <div className="w-full flex flex-wrap gap-2 -mt-60">
      <YoutubeFeed/>

      </div> 
    </div>

    </>
  )
}

export default Page