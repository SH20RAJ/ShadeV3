import VideoCard from "./compo/VideoCard";

let Page = async () => {
  return (
    <>
      <div className="vidcontainer w-full">
        <div className="flex flex-wrap gap-4 sm:gap-8 videos-container overflow-auto h-full w-full justify-center textd">
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>



        </div>
      </div>
    </>
  );
};

export default Page;
