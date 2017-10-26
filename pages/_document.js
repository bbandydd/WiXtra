import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { Header, Footer } from '../components';

export default class MyDocument extends Document {

  render() {
    return (
      <html>
        <Head>
          <title>WiXtra</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </html>
    )
  }
}
