import Link from "next/link";

export default function PinterestFeed({ images }) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
      {images.map((image, i) => (
        <Link href={"/release/" + image.id}>
          <div className="textd">
            <img className="rounded-md" loading="lazy" src={image.contentURL} />
            {image.title || image.content}
          </div>{" "}
        </Link>
      ))}
    </div>
  );
}
