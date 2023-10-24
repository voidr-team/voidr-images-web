import { Stack } from '@mui/joy'
import Head from 'next/head'

function BaseLayout({ currentPage, children }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" key="robots" />
      </Head>
      <Stack bgcolor="primary.500" data-page={currentPage}>
        {children}
      </Stack>
    </>
  )
}

export default BaseLayout
