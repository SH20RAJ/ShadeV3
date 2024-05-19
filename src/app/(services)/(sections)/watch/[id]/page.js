import Head from 'next/head';
import { YouTubeWatchV2 } from './compo/YouTubeWatchV2'
import { getPost } from '@/app/(get)/api/getPost/getPost';


export async function generateMetadata({ params }) {
  const { id } = params;
  const postx = await getPost(id);
  console.log("fdfed", postx);

  return {
    title: postx.title,
    description: postx.content.substring(0, 160),
    openGraph: {
      title: postx.title,
      description: postx.content.substring(0, 160),
      images: [
        {
          url: postx.image,
          alt: postx.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: postx.title,
      description: postx.content.substring(0, 160),
      image: postx.image,
    },
  };
}


export default function page({params}) {

  var id = params.id;
  return (
    <>

    <div className="w-full">

      <YouTubeWatchV2 id={id}/>
    </div>
    </>
  )
}
