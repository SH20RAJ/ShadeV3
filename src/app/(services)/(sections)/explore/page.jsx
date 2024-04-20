import { RedditPosts } from "./compo/redditpposts";
import { ChirpCarousel, ChirpSidebar } from "../Chirp/page";
import { VideoComponent, YoutubeFeed } from "./compo/youtubefeed";
import { CarouselSize } from "./compo/Crousel";

let Page = async () => {
  return (
    <div className="max-w-full overflow-x-hidden">
      {/* <CarouselSize/> */}
      <div className="w-full flex mb-0 flex-col sm:flex-row">
        <div className="md:w-2/3 w-full">
          <ChirpCarousel />
          <RedditPosts />
        </div>
        <div className="md:w-1/3 w-full md:block hidden">
          <ChirpSidebar />
        </div>
      </div>

      <div className="max-w-full flex flex-wrap overflow-hidden">
        <YoutubeFeed />
      </div>
    </div>
  );
};

export default Page;
