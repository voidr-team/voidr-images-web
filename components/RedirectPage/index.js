import { useEffect } from 'react'
import Router from 'next/router'
import LoadingPage from '@/components/LoadingPage'

const RedirectPage = (path) => () => {
  useEffect(() => {
    Router.push(path)
  })

  return <LoadingPage />
}

export default RedirectPage
