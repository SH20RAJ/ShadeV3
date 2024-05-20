import Header from "@/app/compo/Header";
import NextAuthSessionProvider from "@/lib/SessionProvider";
import { Analytics } from "@vercel/analytics/react"


export let metadata = {
  title: "Shade || Home",
  description: "Home Page",
};


export default function RootLayout({ children }) {
  return (
    <NextAuthSessionProvider>
    <html lang="en" className="dark">
      <head>

      </head>
      <body>

            {children}

      </body>
    </html>

    </NextAuthSessionProvider>
  );
}
