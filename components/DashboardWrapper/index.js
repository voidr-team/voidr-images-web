import dynamic from 'next/dynamic'
import LastProcessedFiles from './LastProcessedFiles'
import Insights from './Insights'
import styles from './DashboardWrapper.module.scss'
import ModalFileImage from '../ModalFileImage'
import Metrics from './Metrics'
import WaitingData from './WaitingData'
import useDashboardWrapper from './useDashboardWrapper'
import LoadingPage from '../LoadingPage'
const TrafficDataGraph = dynamic(
  () => {
    return import('./TrafficDataGraph')
  },
  { ssr: false }
)

export default function DashboardWrapper() {
  const {
    hasNoUsage,
    graphData,
    isLoading,
    data,
    isDialogOpen,
    currentImage,
    setCurrentImage,
    setIsDialogOpen,
  } = useDashboardWrapper()
  if (isLoading || hasNoUsage) {
    return <LoadingPage />
  }
  return (
    <div className={styles.dashboardWrapper}>
      {hasNoUsage && !isLoading && <WaitingData />}
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
        <Metrics usage={data?.usage} savedData={data?.bytesSaved} />
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
