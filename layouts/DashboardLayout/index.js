import Sidebar from '@/components/Sidebar'
import { Stack } from '@mui/joy'

const { default: BaseLayout } = require('../BaseLayout')

function DashboardLayout({ children }) {
  return (
    <BaseLayout currentPage="dashboard">
      <Stack direction="row">
        <Sidebar />
        {children}
      </Stack>
    </BaseLayout>
  )
}

export default DashboardLayout
