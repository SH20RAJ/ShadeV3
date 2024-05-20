import Link from "next/link";




export const metadata = {
    title : "Studio | Shade"
}
// app/studio/page.js
export default function StudioPage() {
    return (
      <div>
        <h1>Welcome to the Studio</h1>
        <Link href={"/"}>/</Link>
        <p>This is the studio page content.</p>
      </div>
    );
  }
  