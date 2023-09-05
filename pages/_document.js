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

                <symbol id="More_Horizontal" fill="none" viewBox="0 0 24 24"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM5 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/></symbol>

                <symbol id="Triangle_Warning" fill="none" viewBox="0 0 24 24"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v4m-7.621 2.2c-.91 1.575-1.364 2.363-1.296 3.01a2 2 0 0 0 .813 1.408C4.422 20 5.331 20 7.15 20h9.703c1.817 0 2.726 0 3.251-.382a2 2 0 0 0 .814-1.409c.068-.646-.386-1.434-1.296-3.01l-4.85-8.4c-.909-1.574-1.364-2.362-1.958-2.626a2 2 0 0 0-1.627 0c-.593.264-1.048 1.052-1.957 2.625L4.38 15.2Zm7.672.8v.1h-.1V16h.1Z"/></symbol>
                
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
