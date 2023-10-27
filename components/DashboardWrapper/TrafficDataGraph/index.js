import { Stack, Typography } from '@mui/joy'
import ApexCharts from 'react-apexcharts'
import { ChevronRight } from 'lucide-react'

const data = [
  { date: '2023-10-20', value: 100 },
  { date: '2023-10-21', value: 150 },
  { date: '2023-10-22', value: 120 },
]

const chartOptions = {
  // Configurações do gráfico ApexCharts
  // Personalize de acordo com suas necessidades
  chart: {
    type: 'line',
  },
  xaxis: {
    categories: data.map((item) => item.date),
  },
}

const series = [
  {
    name: 'Valores',
    data: data.map((item) => item.value),
  },
]

export default function TrafficDataGraph() {
  return (
    <Stack
      maxWidth="fit-content"
      padding={2.8}
      borderRadius={6}
      border={1}
      borderColor="neutral.600"
      minWidth="945px"
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography level="h4">Traffic</Typography>
        <ChevronRight />
      </Stack>

      <ApexCharts
        options={chartOptions}
        series={series}
        type="line"
        height={300}
      />
    </Stack>
  )
}
