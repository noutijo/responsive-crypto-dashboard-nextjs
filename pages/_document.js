import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" className="text-[14px] scroll-smooth font-sans">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { if ((localStorage.theme) && (localStorage.theme === 'light')) {document.documentElement.classList.add('light')} else {document.documentElement.classList.add('dark')}} catch (__) {}`,
          }}></script>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="w-screen h-screen overflow-x-hidden select-none text-colorDark dark:text-colorDark_DM bg-colorLight dark:bg-colorLight_DM font-sans">
        <Main />
        <NextScript />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
