import PinterestFeed from "./compo/PinterestFeed";
import Gallary1 from "./compo/gallary1";
import Gallary2 from "./compo/gallary2";
import { getimages } from "./getimages";

let images = await getimages();
let Page = async () => {
  return (
    <>
      <div className="flex md:flex-row_ flex-col overflow-auto w-full min-h-full">
        {/* <Gallary2 />
        <Gallary1 /> */}
        <>
          <PinterestFeed images={images} />
        </>
      </div>
    </>
  );
};

export default Page;
