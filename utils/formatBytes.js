export default function formatBytes(bytes, decimals = 2) {
  const KILOBYTE_FACTOR = 1024
  const MEGABYTE_FACTOR = KILOBYTE_FACTOR ** 2 // 1024^2
  const GIGABYTE_FACTOR = KILOBYTE_FACTOR ** 3 // 1024^3

  let result
  let unit

  if (bytes < KILOBYTE_FACTOR) {
    result = bytes.toFixed(decimals)
    unit = 'KB'
  } else if (bytes < MEGABYTE_FACTOR) {
    result = (bytes / KILOBYTE_FACTOR).toFixed(decimals)
    unit = 'MB'
  } else if (bytes < GIGABYTE_FACTOR) {
    result = (bytes / MEGABYTE_FACTOR).toFixed(decimals)
    unit = 'GB'
  } else {
    result = (bytes / GIGABYTE_FACTOR).toFixed(decimals)
    unit = 'TB'
  }

  return `${result} ${unit}`
}
