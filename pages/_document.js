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
        </Head>
        <body>
          <div
            dangerouslySetInnerHTML={{
              __html: `
							<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol id="More_Vertical" fill="none" viewBox="0 0 24 24"><rect width="2" height="2" x="11" y="17" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="1"/><rect width="2" height="2" x="11" y="11" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="1"/><rect width="2" height="2" x="11" y="5" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="1"/></symbol>
            
                <symbol id="Remove_Minus_Circle" fill="none" viewBox="0 0 24 24"><g stroke="#EC2D30" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" opacity=".32"/><path d="M8 12h8"/></g></symbol>
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
