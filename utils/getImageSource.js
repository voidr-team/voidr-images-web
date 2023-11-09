const VOIDR_URL_IMAGE = process.env.NEXT_PUBLIC_VOIDR_URL_IMAGE

export default function getImageSource(imageUrl = '') {
  return `${VOIDR_URL_IMAGE}${imageUrl.replace('v1/images/', '')}`
}
