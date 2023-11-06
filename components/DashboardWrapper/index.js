import dynamic from 'next/dynamic'
import LastProcessedFiles from './LastProcessedFiles'
import Insights from './Insights'
import PlanUsage from './PlanUsage'
import useDashboard from '@/hooks/useDashboard'
import styles from './DashboardWrapper.module.scss'
import ModalFileImage from '../ModalFileImage'
import { useState } from 'react'
const TrafficDataGraph = dynamic(
  () => {
    return import('./TrafficDataGraph')
  },
  { ssr: false }
)

export default function DashboardWrapper() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)

  const { data, isLoading } = useDashboard()
  const graphData = data?.imagesPerDay?.map(({ count, date }) => ({
    date: date,
    value: count,
  }))

  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.dataColumn}>
        <LastProcessedFiles
          setIsDialogOpen={setIsDialogOpen}
          setCurrentImage={setCurrentImage}
        />
      </div>

      <div className={styles.infoColumn}>
        <Insights bytesSaved={data?.bytesSaved} />
      </div>

      <div className={styles.dataColumn}>
        {typeof window !== 'undefined' && !isLoading ? (
          <TrafficDataGraph data={graphData} />
        ) : null}
      </div>

      <div className={styles.infoColumn}>
        <PlanUsage usage={data?.usage} />
      </div>

      <ModalFileImage
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
      />
    </div>
  )
}
