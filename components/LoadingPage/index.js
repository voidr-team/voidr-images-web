import Loader from '@/components/UI/Loader'
import { loadingPageWrapper } from './LoadingPage.module.scss'

export default function LoadingPage() {
  return (
    <div className={loadingPageWrapper}>
      <Loader />
    </div>
  )
}
