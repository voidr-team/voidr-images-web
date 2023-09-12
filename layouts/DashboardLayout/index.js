import Sidebar from '@/components/Sidebar'
import { Stack } from '@mui/joy'
import BaseLayout from '../BaseLayout'

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
