import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <title>RebelTech</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
  <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/png" />
  <link rel="icon" href="/favicon.ico" sizes="16x16" type="image/png" />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;