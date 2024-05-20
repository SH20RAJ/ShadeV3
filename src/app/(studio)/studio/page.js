import { StudioEdit } from "./StudioEdit";
import Link from "next/link";




export const metadata = {
    title : "Studio | Shade"
}
// app/studio/page.js
export default function StudioPage() {
    return (
      <>
      <StudioEdit/>
      </>
    );
  }
  