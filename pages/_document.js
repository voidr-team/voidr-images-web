import Document, { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '../next-i18next.config'
import { getInitColorSchemeScript } from '@mui/joy/styles'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale
    return (
      <Html lang={currentLocale}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/icons/site.webmanifest" />
          <meta name="theme-color" content="#222b34" />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/Poppins-Bold.woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/Poppins-Medium.woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/Poppins-Regular.woff2"
            crossOrigin=""
          />
        </Head>
        <body>
          <div
            dangerouslySetInnerHTML={{
              __html: `
							<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
              </svg>
						`,
            }}
          ></div>
          <div id="modal-wrapper"></div>
          {getInitColorSchemeScript()}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
