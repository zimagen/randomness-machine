import React from 'react'
import Document, {
  Head,
  Main,
  NextScript,
  DocumentInitialProps
} from 'next/document'

export default class MyDocument extends Document<DocumentInitialProps> {
  render() {
    return (
      <html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
