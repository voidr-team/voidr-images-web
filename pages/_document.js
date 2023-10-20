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
            href="/images/logo-small.svg"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            sizes="32x32"
            href="/images/logo-small.svg"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            sizes="16x16"
            href="/images/logo-small.svg"
          />
          <link rel="manifest" href="/icons/site.webmanifest" />
          <meta name="theme-color" content="#222b34" />
        </Head>
        <body>
          <div
            dangerouslySetInnerHTML={{
              __html: `
							<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol id="More_Vertical" fill="none" viewBox="0 0 24 24"><rect width="2" height="2" x="11" y="17" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="1"/><rect width="2" height="2" x="11" y="11" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="1"/><rect width="2" height="2" x="11" y="5" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="1"/></symbol>

                <symbol id="More_Horizontal" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM5 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/></symbol>

                <symbol id="Triangle_Warning" fill="none" viewBox="0 0 24 24"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v4m-7.621 2.2c-.91 1.575-1.364 2.363-1.296 3.01a2 2 0 0 0 .813 1.408C4.422 20 5.331 20 7.15 20h9.703c1.817 0 2.726 0 3.251-.382a2 2 0 0 0 .814-1.409c.068-.646-.386-1.434-1.296-3.01l-4.85-8.4c-.909-1.574-1.364-2.362-1.958-2.626a2 2 0 0 0-1.627 0c-.593.264-1.048 1.052-1.957 2.625L4.38 15.2Zm7.672.8v.1h-.1V16h.1Z"/></symbol>
                
                <symbol id="Remove_Minus_Circle" fill="none" viewBox="0 0 24 24"><g stroke="#EC2D30" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" opacity=".32"/><path d="M8 12h8"/></g></symbol>
              
                <symbol id="Close_MD" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"/></symbol>

                <symbol id="Image_Icon" fill="none" viewBox="0 0 17 17"><mask id="a" width="17" height="17" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M17 0H0v17h17V0Z"/></mask><g fill="#fff" mask="url(#a)"><path d="M13.458 0H3.542A3.545 3.545 0 0 0 0 3.542v9.916A3.545 3.545 0 0 0 3.542 17h9.916A3.545 3.545 0 0 0 17 13.458V3.542A3.545 3.545 0 0 0 13.458 0ZM3.542 1.417h9.916a2.125 2.125 0 0 1 2.125 2.125v9.916a2.089 2.089 0 0 1-.212.91l-6.49-6.49a3.541 3.541 0 0 0-5.01 0l-2.454 2.454v-6.79a2.125 2.125 0 0 1 2.125-2.125Zm0 14.166a2.126 2.126 0 0 1-2.125-2.125v-1.123L4.872 8.88a2.124 2.124 0 0 1 3.006 0l6.49 6.491a2.095 2.095 0 0 1-.91.212H3.542Z"/><path d="M11.333 7.437a2.48 2.48 0 1 0 0-4.958 2.48 2.48 0 0 0 0 4.958Zm0-3.541a1.062 1.062 0 1 1 0 2.125 1.062 1.062 0 0 1 0-2.125Z"/></g></symbol>
              
                <symbol id="Profile_Icon" fill="none" viewBox="0 0 18 18"><path fill="#9FA8C0" d="M9 0C4.037 0 0 4.037 0 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9ZM6 15.873v-.123c0-1.655 1.346-3 3-3 1.655 0 3 1.345 3 3v.123a7.458 7.458 0 0 1-3 .627 7.458 7.458 0 0 1-3-.627Zm7.444-.835A4.507 4.507 0 0 0 9 11.25a4.507 4.507 0 0 0-4.444 3.788A7.495 7.495 0 0 1 1.5 9c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5a7.495 7.495 0 0 1-3.056 6.038ZM9 3.75c-1.654 0-3 1.346-3 3 0 1.655 1.346 3 3 3 1.655 0 3-1.345 3-3 0-1.654-1.345-3-3-3Zm0 4.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5Z"/></symbol>
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
