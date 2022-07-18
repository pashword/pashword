import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pashword - Passwords Done Right</title>
        <meta name="application-name" content="Pashword" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Pashword - Passwords done right"
        />
        <meta
          name="description"
          content="Encrypted Personalized Password Generator"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#7c3aed" />

        <link rel="apple-touch-icon" href="/icons/apple-touc-icon.png" />

        <link rel="icon" type="image/png" href="/favicon.png" />

        <link rel="manifest" href="/manifest.json" />

        <link rel="shortcut icon" href="/pw.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://pashword.vercel.app" />
        <meta name="twitter:title" content="Pashword - Passwords done right" />
        <meta
          name="twitter:description"
          content="Encrypted Personalized Password Generator"
        />
        <meta
          name="twitter:image"
          content="https://pashword.vercel.app/twitter-og-image.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pashword - Passwords done right" />
        <meta
          property="og:description"
          content="Encrypted Personalized Password Generator. Pashword is a cryptographically secure password generator that generates a unique password for all your accounts."
        />
        <meta property="og:site_name" content="Pashword" />
        <meta property="og:url" content="https://pashword.app" />
        <meta
          property="og:image"
          content="https://pashword.vercel.app/og-image.png"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
