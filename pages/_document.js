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
            href="/images/voidr-favicon.png"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            sizes="32x32"
            href="/images/voidr-favicon.png"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            sizes="16x16"
            href="/images/voidr-favicon.png"
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

              <symbol id="Triangle_Warning" fill="currentColor" viewBox="0 0 24 24"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v4m-7.621 2.2c-.91 1.575-1.364 2.363-1.296 3.01a2 2 0 0 0 .813 1.408C4.422 20 5.331 20 7.15 20h9.703c1.817 0 2.726 0 3.251-.382a2 2 0 0 0 .814-1.409c.068-.646-.386-1.434-1.296-3.01l-4.85-8.4c-.909-1.574-1.364-2.362-1.958-2.626a2 2 0 0 0-1.627 0c-.593.264-1.048 1.052-1.957 2.625L4.38 15.2Zm7.672.8v.1h-.1V16h.1Z"/></symbol>
              
              <symbol id="Remove_Minus_Circle" fill="none" viewBox="0 0 24 24"><g stroke="#EC2D30" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" opacity=".32"/><path d="M8 12h8"/></g></symbol>
            
              <symbol id="Close_MD" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"/></symbol>

              <symbol id="Image_Icon" fill="none" viewBox="0 0 17 17"><mask id="a" width="17" height="17" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="currentColor" d="M17 0H0v17h17V0Z"/></mask><g fill="currentColor" mask="url(#a)"><path d="M13.458 0H3.542A3.545 3.545 0 0 0 0 3.542v9.916A3.545 3.545 0 0 0 3.542 17h9.916A3.545 3.545 0 0 0 17 13.458V3.542A3.545 3.545 0 0 0 13.458 0ZM3.542 1.417h9.916a2.125 2.125 0 0 1 2.125 2.125v9.916a2.089 2.089 0 0 1-.212.91l-6.49-6.49a3.541 3.541 0 0 0-5.01 0l-2.454 2.454v-6.79a2.125 2.125 0 0 1 2.125-2.125Zm0 14.166a2.126 2.126 0 0 1-2.125-2.125v-1.123L4.872 8.88a2.124 2.124 0 0 1 3.006 0l6.49 6.491a2.095 2.095 0 0 1-.91.212H3.542Z"/><path d="M11.333 7.437a2.48 2.48 0 1 0 0-4.958 2.48 2.48 0 0 0 0 4.958Zm0-3.541a1.062 1.062 0 1 1 0 2.125 1.062 1.062 0 0 1 0-2.125Z"/></g></symbol>
            
              <symbol id="Profile_Icon" fill="none" viewBox="0 0 18 18"><path fill="currentColor" d="M9 0C4.037 0 0 4.037 0 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9ZM6 15.873v-.123c0-1.655 1.346-3 3-3 1.655 0 3 1.345 3 3v.123a7.458 7.458 0 0 1-3 .627 7.458 7.458 0 0 1-3-.627Zm7.444-.835A4.507 4.507 0 0 0 9 11.25a4.507 4.507 0 0 0-4.444 3.788A7.495 7.495 0 0 1 1.5 9c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5a7.495 7.495 0 0 1-3.056 6.038ZM9 3.75c-1.654 0-3 1.346-3 3 0 1.655 1.346 3 3 3 1.655 0 3-1.345 3-3 0-1.654-1.345-3-3-3Zm0 4.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5Z"/></symbol>

              <symbol id="Check_Mark" fill="none" viewBox="0 0 17 13"><path fill="currentColor" d="M6.51 12.758a.888.888 0 0 1-.614.242.888.888 0 0 1-.614-.242L.382 8.09a1.198 1.198 0 0 1 0-1.754l.613-.583a1.347 1.347 0 0 1 1.841 0l3.06 2.913L14.164.792a1.349 1.349 0 0 1 1.841 0l.613.584c.509.485.509 1.27 0 1.754L6.51 12.758Z"/></symbol>

              <symbol id="Node_Icon_bkp" fill="none" viewBox="0 0 36 36"><path fill="currentColor" d="M17.094 29.753c.278.163.593.247.91.247v-.005c.32 0 .636-.083.913-.246l8.673-5.079c.56-.33.91-.944.91-1.602V12.919c0-.66-.35-1.274-.91-1.602l-8.673-5.08a1.88 1.88 0 0 0-1.824 0L8.41 11.314c-.563.325-.91.942-.91 1.602v10.149c0 .658.347 1.274.91 1.604L10.685 26c1.104.55 1.499.55 2 .55 1.631 0 2.57-1.001 2.57-2.745v-10.02a.25.25 0 0 0-.25-.254h-1.1a.25.25 0 0 0-.251.254V23.8c0 .775-.788 1.545-2.078.891L9.2 23.301a.272.272 0 0 1-.134-.235V12.917a.28.28 0 0 1 .137-.24l8.67-5.072a.263.263 0 0 1 .267 0l8.671 5.072c.082.05.134.141.134.242v10.149a.278.278 0 0 1-.132.237l-8.675 5.077a.29.29 0 0 1-.269 0l-2.225-1.339c-.066-.04-.15-.052-.215-.015-.616.354-.733.4-1.31.605-.142.05-.353.137.08.382l2.895 1.738Z"/><path fill="currentColor" d="M16.092 19.76c0 1.48.796 3.247 4.591 3.247l-.012.01c2.749 0 4.325-1.098 4.325-3.013 0-1.9-1.266-2.406-3.932-2.765-2.693-.361-2.966-.548-2.966-1.189 0-.528.232-1.233 2.228-1.233 1.782 0 2.438.39 2.71 1.607a.25.25 0 0 0 .243.198h1.127a.257.257 0 0 0 .252-.277c-.174-2.1-1.55-3.077-4.328-3.077-2.473 0-3.95 1.056-3.95 2.83 0 1.927 1.468 2.457 3.843 2.695 2.84.282 3.062.702 3.062 1.268 0 .983-.777 1.402-2.606 1.402-2.295 0-2.799-.584-2.968-1.742a.252.252 0 0 0-.247-.215h-1.121a.251.251 0 0 0-.251.253Z"/></symbol>
              
              <symbol id="Node_Icon" viewBox="0 0 128 128">
                <g fill="currentColor"><path  d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path></g>
              </symbol>
          

              <symbol id="Php_Icon" viewBox="0 0 128 128">
                <g fill="currentColor"><path d="M64 33.039C30.26 33.039 2.906 46.901 2.906 64S30.26 94.961 64 94.961 125.094 81.099 125.094 64 97.74 33.039 64 33.039zM48.103 70.032c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34H41.7c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515a15.118 15.118 0 01-2.972 3.748zM69.414 73l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528L76.772 73h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zm-56.985 0h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458S41.708 54 38.934 54z"></path></g>
              </symbol>
          
              <symbol id="Python_Icon" viewBox="0 0 128 128">
                <g fill="currentColor"><path  d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path></g>
              </symbol>
            

              <symbol id="Laravel_Icon" viewBox="0 0 128 128">
                <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M16.934 1.719c-1.127.088-2.234.074-3.325.373-2.387.655-4.508 1.702-6.379 3.316-1.1.948-2.06 1.97-2.875 3.174-1.258 1.859-2.115 3.857-2.545 6.106.172.301.353.617.545.938 1.219 2.038 2.439 4.062 3.661 6.098l3.212 5.341c.988 1.646 1.974 3.293 2.96 4.939l4.608 7.688 3.143 5.244c1.527 2.545 3.058 5.088 4.583 7.634l5.609 9.371c1.617 2.699 3.237 5.396 4.857 8.093l.216.314c.235.075.422.011.616-.035 2.134-.512 4.268-1.021 6.402-1.531 3.461-.827 6.922-1.651 10.383-2.479l5.421-1.297c3.499-.836 6.999-1.67 10.498-2.508 3.537-.846 7.073-1.696 10.611-2.543 1.788-.429 3.576-.856 5.365-1.283 3.461-.826 6.922-1.65 10.383-2.474l11.308-2.693.611-.165-.167-.331-3.086-4.362-3.048-4.315-3.26-4.604-3.116-4.413-3.088-4.361-3.188-4.507c-1.041-1.47-2.084-2.938-3.126-4.407l-1.647-2.326a4.275 4.275 0 01-.587-1.159c-.326-1.011.046-1.684.636-2.181.382-.323.822-.56 1.298-.7a20.898 20.898 0 012.01-.51c1.359-.257 2.727-.475 4.091-.702l4.624-.754c.975-.161 1.949-.33 2.924-.495 1.325-.224 2.65-.449 3.976-.67 1.287-.216 2.574-.43 3.861-.642l4.213-.689 2.924-.491c1.112-.186 2.223-.371 3.334-.553 1.386-.226 2.771-.454 4.157-.671.826-.129 1.652-.174 2.472.062a5.63 5.63 0 011.696.833l.721.503c.072-.166-.032-.256-.08-.351a16.543 16.543 0 00-4.26-5.422 16.399 16.399 0 00-5.636-3.09c-1.229-.389-2.492-.208-3.778-.305M55.689 127c-.062 0-.117-.45-.187-.569-1.5-2.56-3.016-5.308-4.498-7.877a1335.74 1335.74 0 01-5.557-9.74c-1.965-3.478-3.913-6.966-5.863-10.452a5709.989 5709.989 0 01-5.549-9.948c-1.115-2.005-2.223-4.014-3.337-6.02l-.296-.459-.542.107c-1.072.277-2.142.556-3.212.838-1.49.392-2.979.791-4.47 1.18-3.347.871-6.694 1.737-10.041 2.605-3.404.884-6.951 1.77-10.356 2.65-.207.053.219.071-.781.106v21.145c.412.656.373.347.399.563.079.626.207 1.257.317 1.877.412 2.31 1.339 4.425 2.679 6.351 1.965 2.826 4.582 4.846 7.788 6.082 1.145.44 2.34.75 3.562.9l1.241.328"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M4.976 77.742c3.939-.937 7.879-1.873 11.818-2.808 1.73-.41 3.461-.815 5.191-1.227.865-.206 1.732-.402 2.59-.634.764-.206.858-.459.465-1.148-.568-.996-1.146-1.986-1.721-2.979l-5.064-8.72-5.062-8.721c-1.717-2.958-3.436-5.916-5.154-8.873l-4.412-7.59c-.636-1.094-1.408-2.191-2.047-3.284-.119-.199.42-.437-.58-.543v47.396c0-.032.453-.059.606-.096l3.37-.773zm121.248 33.878c-1.544.549-3.089 1.102-4.632 1.655l-10.545 3.781c-1.953.701-3.902 1.41-5.856 2.108-3.982 1.421-7.966 2.837-11.949 4.255-2.308.822-4.617 1.838-6.924 2.664-.632.227-1.255.917-1.881.917h26.49l.57-.327c.674-.029 1.337-.229 1.999-.35 2.719-.497 5.154-1.673 7.311-3.392 1.657-1.321 3.005-2.936 4.061-4.778 1.086-1.896 1.731-3.947 2.041-6.101.027-.186.085-.397-.071-.589-.22-.017-.414.086-.614.157zm-2.275-35.571c-1.168-1.598-2.339-3.193-3.505-4.792-1.609-2.207-3.215-4.416-4.822-6.624-.653-.896-1.315-1.785-1.952-2.691-.192-.273-.411-.346-.71-.265l-.171.049c-2.958.719-5.917 1.436-8.876 2.153l-5.302 1.287-10.372 2.519c-3.419.831-6.838 1.663-10.258 2.492l-10.662 2.582c-3.497.849-6.992 1.701-10.488 2.551l-10.142 2.462c-1.787.434-3.574.866-5.359 1.302-.263.064-.546.08-.826.292l.239.455a5999.968 5999.968 0 009.598 16.529c1.874 3.213 3.753 6.424 5.63 9.636 1.079 1.845 2.151 3.692 3.239 5.532a661.851 661.851 0 003.653 6.115c.369.607.788 1.187 1.21 1.759a3.64 3.64 0 001.046.957c.426.257.885.338 1.369.229.25-.057.495-.139.737-.223l.89-.33c3.237-1.107 6.473-2.214 9.711-3.317 2.526-.86 5.055-1.716 7.583-2.571 2.509-.851 5.02-1.698 7.53-2.545l7.474-2.524c2.548-.861 5.095-1.722 7.642-2.585 3.126-1.061 6.251-2.126 9.379-3.185 3.015-1.02 6.033-2.034 9.049-3.052.185-.062.389-.088.542-.291l.019-.439c.001-6.255-.001-12.511.006-18.766a1.38 1.38 0 00-.289-.873c-.948-1.269-1.877-2.551-2.812-3.828zm-.519-58.938c-.702-.889-1.596-1.171-2.692-.885-.477.125-.967.204-1.453.293-1.594.292-3.19.579-4.784.868-2.334.424-4.667.852-7.001 1.272-1.848.332-3.697.659-5.546.983l-7.418 1.298c-.311.054-.625.108-.925.204-.437.14-.563.414-.363.825.163.336.366.657.586.959 1.534 2.114 3.075 4.223 4.616 6.333 2.124 2.909 4.249 5.817 6.374 8.724 1.798 2.46 3.598 4.92 5.397 7.379 1.414 1.932 2.828 3.864 4.244 5.795l.279.338 12.271-3.033.029-.636c.001-8.511-.001-17.022.006-25.534 0-.376-.091-.678-.328-.976-1.032-1.303-2.045-2.621-3.066-3.933l-.226-.274zm3.301 41.241c-1.856.446-3.719.87-5.62 1.373.201.357 5.415 7.395 5.718 7.729l.19.105.021-.429.001-2.963c.001-1.719.005-3.438.001-5.157 0-.209.059-.434-.085-.646l-.226-.012z"></path>
              </symbol>
          
              <symbol id="Django_Icon" viewBox="0 0 128 128">
                <g fill="currentColor"><path d="M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855-25.551-.001-38.87-11.551-38.87-33.705 0-21.338 14.135-35.2 36.015-35.2 3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086-10.6 0-16.717 6.523-16.717 17.939 0 11.145 5.845 17.26 16.582 17.26 2.309 0 4.212-.136 7.202-.542z"></path><path d="M113.672 32.321V80.84c0 16.717-1.224 24.735-4.893 31.666-3.398 6.661-7.883 10.873-17.124 15.494l-19.435-9.241c9.242-4.35 13.726-8.153 16.58-14 2.99-5.979 3.943-12.91 3.943-31.122V32.321zM92.742.111h20.93v21.474h-20.93z"></path></g>
              </symbol>          
          
              <symbol id="React_Icon" viewBox="0 0 128 128">
                <g fill="currentColor"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
              </symbol>
          
              <symbol id="Html_Icon" viewBox="0 0 128 128">
                <path fill="currentColor" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"></path>
              </symbol>

              <symbol id="Web_Icon" viewBox="0 0 49 49" fill="currentColor">
                <path d="M24.5 0C10.9842 0 0 10.9842 0 24.5C0 38.0158 10.9842 49 24.5 49C26.0313 49 27.5217 48.8571 28.9917 48.5917L27.3175 43.5692C27.0725 43.8142 26.8071 44.0183 26.5417 44.2021V41.2213L22.7442 29.8492C22.54 29.2571 22.4583 28.6446 22.4583 28.0525V32.1971C20.5188 32.2788 18.62 32.4421 16.8233 32.7483C16.4558 30.8292 16.2108 28.7467 16.1088 26.5008H22.4583V28.0525C22.4583 26.6029 23.03 25.1942 24.1121 24.1121C25.1533 23.0504 26.5621 22.4583 28.0729 22.4583C28.6854 22.4583 29.2775 22.5604 29.8696 22.7442L41.1192 26.5008H44.8146C44.7738 26.9092 44.7329 27.2971 44.6513 27.685L48.5917 28.9917C48.8571 27.5217 49 26.0313 49 24.5C49 10.9842 38.0158 0 24.5 0ZM22.4583 36.2804V44.2021C20.7025 43.0179 19.0283 40.4046 17.8442 36.7092C19.3346 36.4846 20.8658 36.3417 22.4583 36.2804ZM7.35 13.4546C8.98333 14.2304 10.8208 14.8838 12.8217 15.4146C12.3929 17.5992 12.1275 19.9471 12.0254 22.4175H4.18542C4.51208 19.1508 5.65542 16.1088 7.35 13.4546ZM4.18542 26.5008H12.0254C12.1275 29.0121 12.3929 31.3804 12.8217 33.5854C10.8208 34.1163 8.98333 34.7696 7.35 35.5454C5.5898 32.8256 4.50482 29.7247 4.18542 26.5008ZM16.2108 43.1404C13.8841 42.1063 11.772 40.645 9.98375 38.8325C11.1475 38.3221 12.4338 37.8933 13.8017 37.5462C14.455 39.6492 15.2717 41.5479 16.2108 43.1404ZM13.8017 11.4538C12.4338 11.1067 11.1475 10.6779 9.98375 10.1675C11.76 8.37083 13.8629 6.90083 16.2108 5.85958C15.2717 7.45208 14.455 9.35083 13.8017 11.4538ZM22.4583 22.4175H16.1088C16.2108 20.2125 16.4558 18.1504 16.8233 16.2517C18.62 16.5579 20.5188 16.7213 22.4583 16.8029V22.4175ZM22.4583 12.7196C20.8658 12.6583 19.3346 12.5154 17.8442 12.2908C19.0283 8.59542 20.7025 5.98208 22.4583 4.79792V12.7196ZM26.5417 4.79792C28.2975 5.98208 29.9717 8.59542 31.1558 12.2908C29.6654 12.5154 28.1342 12.6583 26.5417 12.7196V4.79792ZM26.5417 22.4175V16.8029C28.4813 16.7213 30.38 16.5579 32.1767 16.2517C32.5442 18.1504 32.7892 20.2125 32.8913 22.4175H26.5417ZM32.7892 5.85958C35.1371 6.90083 37.24 8.37083 39.0163 10.1675C37.8525 10.6779 36.5662 11.1067 35.1983 11.4538C34.545 9.35083 33.7283 7.45208 32.7892 5.85958ZM36.9746 22.4175C36.8725 19.9471 36.6071 17.5992 36.1783 15.4146C38.1792 14.8838 40.0167 14.2304 41.65 13.4546C43.3446 16.1088 44.4879 19.1508 44.8146 22.4175H36.9746Z" />
                <path d="M34.5395 49.0002H34.5047C34.1894 48.9931 33.8839 48.8886 33.6303 48.7011C33.3766 48.5136 33.1871 48.2522 33.0878 47.9528L26.6219 28.557C26.5317 28.2871 26.5185 27.9974 26.5838 27.7205C26.6491 27.4435 26.7903 27.1902 26.9915 26.989C27.1927 26.7878 27.446 26.6467 27.7229 26.5814C27.9999 26.5161 28.2895 26.5293 28.5594 26.6194L47.9552 33.0854C48.2541 33.1854 48.5149 33.3752 48.7019 33.6288C48.889 33.8825 48.9932 34.1877 49.0003 34.5028C49.0075 34.8179 48.9172 35.1275 48.7419 35.3894C48.5665 35.6513 48.3146 35.8527 48.0206 35.9662L39.317 39.3145L35.9686 48.0181C35.8576 48.3071 35.6616 48.5556 35.4064 48.731C35.1513 48.9063 34.849 49.0001 34.5395 49.0002Z" />
              </symbol>

              <symbol id="Mobile_Icon" fill="currentColor" viewBox="0 0 31 46"><path  d="M25.396 0H5.27A5.275 5.275 0 0 0 0 5.27v35.46A5.275 5.275 0 0 0 5.27 46h20.126a5.275 5.275 0 0 0 5.27-5.27V5.27A5.275 5.275 0 0 0 25.397 0Zm1.437 40.25a1.917 1.917 0 0 1-1.916 1.917H5.75a1.917 1.917 0 0 1-1.917-1.917V5.75A1.917 1.917 0 0 1 5.75 3.833h.958c1.058 0 1.917.859 1.917 1.917s.859 1.917 1.917 1.917h9.583a1.917 1.917 0 0 0 1.917-1.917c0-1.058.858-1.917 1.916-1.917h.959a1.917 1.917 0 0 1 1.916 1.917v34.5Z"/></symbol>
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
