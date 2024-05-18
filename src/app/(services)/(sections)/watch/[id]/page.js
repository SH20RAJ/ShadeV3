import { YouTubeWatchV2 } from './compo/YouTubeWatchV2'

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
