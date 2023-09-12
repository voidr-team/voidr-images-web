import dayjs from 'dayjs'

function formatDateLocal(date) {
  if (!dayjs(date).isValid()) {
    console.error('Invalid date formatDateLocal')
    return null
  }

  return dayjs(date).format('DD/MM/YYYY HH:mm')
}

export default formatDateLocal
