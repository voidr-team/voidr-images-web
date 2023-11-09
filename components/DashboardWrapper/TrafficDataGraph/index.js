import ApexCharts from 'react-apexcharts'
import dayjs from 'dayjs'
import styles from './TrafficDataGraph.module.scss'
import Widget from '@/components/UI/Widget'

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
    <Widget title="Daily processed images">
      <ApexCharts
        options={chartOptions(data)}
        series={series(data)}
        type="line"
        height={280}
      />
    </Widget>
  )
}
