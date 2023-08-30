import Head from 'next/head'

function BaseLayout({ currentPage, children }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" key="robots" />
      </Head>
      <div data-page={currentPage}>{children}</div>
    </>
  )
}

export default BaseLayout