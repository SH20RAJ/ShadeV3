import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <header>

        </header>
        <div className="app-container">

        {children}
        </div>
        </body>
      
      <style>
      </style>
      <div className="footer" dangerouslySetInnerHTML={{__html : '<script src="/script.js"></script> '}}>

      </div>
      
    </html>
  );
}
