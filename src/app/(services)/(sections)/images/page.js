import PinterestFeed from "./compo/PinterestFeed";
import Gallary1 from "./compo/gallary1";
import Gallary2 from "./compo/gallary2";

let Page = async () => {
  return (
    <>
    <div className="flex md:flex-row_ flex-col overflow-auto w-full min-h-screen">
        {/* <Gallary2 />
        <Gallary1 /> */}
        <>
        <PinterestFeed/>

</>
    </div>

    </>
  );
};

export default Page;

