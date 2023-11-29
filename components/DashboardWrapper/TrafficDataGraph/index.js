import ApexCharts from 'react-apexcharts'
import dayjs from 'dayjs'
import styles from './TrafficDataGraph.module.scss'
import Widget from '@/components/UI/Widget'
import { useTranslation } from 'next-i18next'

const chartOptions = (data) => ({
  chart: {
    id: 'trafic-data',
    width: '100%',
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
    colors: ['#5e5ce6'],
    width: 2,
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
    strokeDashArray: 0,
    borderColor: '#1d232d',
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
  const { t } = useTranslation(['translations', 'common'])
  return (
    <Widget title={t('traffic_graph.title')}>
      <ApexCharts
        options={chartOptions(data)}
        series={series(data)}
        type="line"
        height={280}
      />
    </Widget>
  )
}
