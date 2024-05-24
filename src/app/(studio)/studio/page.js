import { headers } from "next/headers";
import { StudioPage } from "./StudioPage";


export const metadata = {
    title : "Studio || Shade"
}
// app/studio/page.js
export default function page() {

    // Get headers object
    const headersInstance = headers();
  
    // Set cache control headers
    headersInstance.set('Cache-Control', 'no-store, max-age=0');

    
    return (
      <>
      <StudioPage/>
      </>
    );
  }
  