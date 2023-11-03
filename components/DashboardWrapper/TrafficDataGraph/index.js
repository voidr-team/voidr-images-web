import { Stack, Typography } from '@mui/joy'
import ApexCharts from 'react-apexcharts'
import { ChevronRight } from 'lucide-react'
import dayjs from 'dayjs'
import styles from './TrafficDataGraph.module.scss'

const chartOptions = (data) => ({
  chart: {
    id: 'trafic-data',
    type: 'line',
    height: 280,
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000,
      },
    },
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: 'smooth',
    colors: ['#5E5CE6'],
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: data.map((item) => dayjs(item.date).format('DD/MM/YYYY')),
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: '#686c70',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#686c70',
      },
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      const dateData = w?.globals?.categoryLabels[dataPointIndex]
      return (
        `<div class="${styles.tooltip}">` +
        `<span class="${styles.date}">` +
        dateData +
        '</span>' +
        `<span class="${styles.dataLabel}">` +
        series[seriesIndex][dataPointIndex] +
        '</span>' +
        '</div>'
      )
    },
  },
  grid: {
    strokeDashArray: 1,
    position: 'back',
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
})

const series = (data) => [
  {
    name: 'Valores',
    data: data.map((item) => item.value),
  },
]
export default function TrafficDataGraph({ data = [] }) {
  return (
    <Stack
      width="100%"
      maxWidth="fit-content"
      padding={2.8}
      borderRadius={6}
      border={1}
      flex={1}
      borderColor="neutral.600"
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography level="h4">Traffic</Typography>
        <ChevronRight />
      </Stack>

      <ApexCharts
        options={chartOptions(data)}
        series={series(data)}
        type="line"
        height={280}
        width={740}
      />
    </Stack>
  )
}