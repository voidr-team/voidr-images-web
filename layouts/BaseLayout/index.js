import Head from 'next/head'

function BaseLayout({ currentPage, children }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" key="robots" />
      </Head>
      <main
        style={{ backgroundColor: 'var(--primary-500)' }}
        data-page={currentPage}
      >
        {children}
      </main>
    </>
  )
}

export default BaseLayout
