import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="sence of lanka"
                />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta property="og:type" content="website"></meta>
                <meta property="og:ttl" content="604800"></meta>
                <link rel="manifest" href="/manifest.json" />
                <link rel="app-touch-icon" href="/icons/icon-192x192.png" />
                <title>sense of lanka</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
