export default function VideoCard() {
  return (
    <>
      <div className="flex flex-col gap-2 md:w-[30%] sm:w-[40%]  self-center">
        <a href="/watch?v=1" className="relative aspect-video">
          <img
            src="https://i3.ytimg.com/vi/TdjmTjuU8JE/maxresdefault.jpg"
            className="block w-full h-full object-cover transition-[border-radius] duration-200  rounded-xl"
          />
          <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
            43:06
          </div>
          <video
            className="block h-full object-cover absolute inset-0 transition-opacity duration-200 opacity-0"
            playsInline
            src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
        </a>
        <div className="flex gap-2">
          <a href="/@constGenius" className="flex shrink-0">
            <img
              className="w-12 h-12 rounded-full"
              src="https://yt3.googleusercontent.com/34iWjSG2HTPH6ZrbMgNm2rBZ1V2JFV0Mhqh0LRz-4io54KaVapieB0E08YoM6qWgwKS2vDtW=s900-c-k-c0x00ffffff-no-rj"
            />
          </a>
          <div className="flex flex-col">
            <a href="/watch?v=1" className="font-bold">
              Spotify Clone Using HTML CSS | Creating a Spotify Clone
            </a>
            <a href="/@constGenius" className="text-secondary-text text-sm">
              constGenius
            </a>
            <div className="text-secondary-text text-sm">
              888K Views • 7 months ago
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
