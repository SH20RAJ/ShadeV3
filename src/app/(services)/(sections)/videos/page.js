import { YoutubeFeed } from "../explore/compo/youtubefeed";
import VideoCard from "./compo/VideoCard";

let Page = async () => {
  return (
    <>
      <div className="vidcontainer w-full">
      <YoutubeFeed/>
      
      </div>
    </>
  );
};

export default Page;
