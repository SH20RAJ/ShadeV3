import "@/app/globals.css";
import "@/app/article.css";
import Sidebar from "../compo/Sidebar";
import Head from "../compo/head";
import Header from "../compo/Header";
import NextAuthSessionProvider from "@/lib/SessionProvider";
import { Analytics } from "@vercel/analytics/react"
import NextTopLoader from 'nextjs-toploader';


// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Chivo } from 'next/font/google'
import { Comfortaa } from 'next/font/google'
import { HeaderV2 } from "@/components/header-v2";

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo',
})
const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comfortaa',
})



export let metadata = {
  title: "Shade || Home",
  description: "Home Page",
};


export default function RootLayout({ children }) {
  return (
    <NextAuthSessionProvider>
    <html lang="en" className="dark">
      <head>
        <Head />

      </head>
      <body className={chivo.variable + comfortaa.variable}>
      <NextTopLoader />

        <div className="app-container">
          <HeaderV2 />
          {/* <Header /> */}
          <div className="app-content">
            <Sidebar />
            <div className="overflow-y-auto flex w-full justify-center">
            {children}
            </div>
          </div>
        </div>

        <style></style>
        <div
          className="footer"
          dangerouslySetInnerHTML={{
            __html: '<script src="/script.js"></script> ',
          }}
        ></div>
        <Analytics/>
      </body>
    </html>

    </NextAuthSessionProvider>
  );
}
