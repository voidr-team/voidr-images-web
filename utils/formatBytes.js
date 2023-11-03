export default function formatBytes(bytes, decimals = 2) {
  const KILOBYTE_FACTOR = 1024
  const MEGABYTE_FACTOR = KILOBYTE_FACTOR ** 2 // 1024^2
  const GIGABYTE_FACTOR = KILOBYTE_FACTOR ** 3 // 1024^3

  let result
  let unit

  // Se menor que 1 GB, converte para MB, senão para GB
  if (bytes < GIGABYTE_FACTOR) {
    result = (bytes / MEGABYTE_FACTOR).toFixed(decimals)
    unit = 'MB'
  } else {
    result = (bytes / GIGABYTE_FACTOR).toFixed(decimals)
    unit = 'GB'
  }

  return `${result} ${unit}`
}
