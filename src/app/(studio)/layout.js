// app/studio/layout.js
import '../globals.css';  // Ensure global styles are included if needed

export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>nested header</header>
        <br />
        <main>{children}</main>
      </body>
    </html>
  );
}
