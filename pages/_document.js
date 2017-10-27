import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Header, Footer } from 'components';

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();

    return (
      <html>
        <Head>
          <title>WiXtra</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {this.props.styleTags}
        </Head>
        <body>
          { main }
          <NextScript />
        </body>
      </html>
    )
  }
}
