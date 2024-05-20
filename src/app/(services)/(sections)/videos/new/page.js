import NewTabs from "@/app/(root)/new/NewTabs";
import UploadNewVideo  from "../compo/UploadNewVideo";
const NewVideo = () => {
  return (
    <div className=" overflow-auto">
      <NewTabs />
      <UploadNewVideo/>
    </div>
  )
}
export default NewVideo;