const VOIDR_API_URL = process.env.NEXT_PUBLIC_VOIDR_URL_IMAGE

export default function getImageSource(imageUrl) {
  return `${VOIDR_API_URL}${imageUrl}`
}
