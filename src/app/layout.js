import "./globals.css";
import Header from "./compo/Header";
import  Sidebar from "./compo/Sidebar";


export let metadata = {
  title: "Home",
  description: "Home Page",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <header>

        </header>
        <div className="app-container">
        <Header/>
    <div className="app-content">
      <Sidebar/>
        {children}
        </div>
        </div>

      <style>
      </style>
      <div className="footer" dangerouslySetInnerHTML={{__html : '<script src="/script.js"></script> '}}></div>
        </body>
    </html>
  );
}
