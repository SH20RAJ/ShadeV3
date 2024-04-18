import NextAuthSessionProvider from "@/lib/SessionProvider";


export let metadata = {
  title: "Shade || Visuals",
  description: "Visuals Page",
};


export default function RootLayout({ children }) {
  return (
    <NextAuthSessionProvider>
    <html lang="en" className=" ">
      <head>

      </head>
      <body>
        {children}
      </body>
    </html>

    </NextAuthSessionProvider>
  );
}
