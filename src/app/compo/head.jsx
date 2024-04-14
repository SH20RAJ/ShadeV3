
export default function Head() {
  return (
    <>
  {/* Web App Manifest */}
  <link rel="manifest" href="/manifest.json" />
  {/* Theme Color */}
  <meta name="theme-color" content="#359ef6" />
  {/* Background Color */}
  <style dangerouslySetInnerHTML={{__html: "\n    body {\n        background-color: hotpink;\n    }\n" }} />
  {/* App Icons */}
  <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
  <link rel="icon" type="image/png" sizes="256x256" href="/icon-256x256.png" />
  <link rel="icon" type="image/png" sizes="384x384" href="/icon-384x384.png" />
  <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
  {/* Web App Title and Description */}
  <meta name="application-name" content="Shade" />
  <meta name="apple-mobile-web-app-title" content="Shade" />
  <meta name="description" content="Social Media for Educated Persons" />
  {/* Web App Display Mode */}
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  {/* Start URL */}
  <link rel="canonical" href="/" />
  {/* iOS Icons */}
  <link rel="apple-touch-icon" href="/icon-192x192.png" />
  <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png" />
  <link rel="apple-touch-icon" sizes="256x256" href="/icon-256x256.png" />
  <link rel="apple-touch-icon" sizes="384x384" href="/icon-384x384.png" />
  <link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.png" />

    </>
  )
}
