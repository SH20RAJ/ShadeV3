import "./globals.css";
import Sidebar from "./compo/Sidebar";
import Head from "./compo/head";
import Header from "./compo/Header";
import NextAuthSessionProvider from "@/lib/SessionProvider";

export let metadata = {
  title: "Shade || Home",
  description: "Home Page",
};


export default function RootLayout({ children }) {
  return (
    <NextAuthSessionProvider>
    <html lang="en">
      <head>
        <Head />

      </head>
      <body>
        <div className="app-container">
          <Header />
          <div className="app-content">
            <Sidebar />
            {children}
          </div>
        </div>

        <style></style>
        <div
          className="footer"
          dangerouslySetInnerHTML={{
            __html: '<script src="/script.js"></script> ',
          }}
        ></div>
      </body>
    </html>

    </NextAuthSessionProvider>
  );
}
