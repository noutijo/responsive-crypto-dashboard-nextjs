import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="text-[14px] scroll-smooth font-sans">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { if ((localStorage.theme) && (localStorage.theme === 'light')) {document.documentElement.classList.add('light')} else {document.documentElement.classList.add('dark')}} catch (__) {}`,
          }}></script>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/fav.png" />
      </Head>
      <body className="w-screen h-screen overflow-x-hidden select-none">
        <Main />
        <NextScript />
      </body> 
    </Html>
  );
}
