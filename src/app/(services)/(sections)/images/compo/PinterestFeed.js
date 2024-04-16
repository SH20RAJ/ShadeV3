import Link from "next/link";
import Image from "next/image";

export default function PinterestFeed({ images }) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
      {images.map((image, i) => (
        <Link key={image.id} href={"/release/" + image.id}>
          <div className="textd">
            <img className="rounded-md" loading="lazy" src={encodeURI("https://imagecdn.app/v2/image/"+image.contentURL)} width={100} height={100}/>
            {image.title || image.content}
          </div>{" "}
        </Link>
      ))}
    </div>
  );
}
