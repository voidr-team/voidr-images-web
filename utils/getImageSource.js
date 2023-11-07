const VOIDR_API_URL = process.env.NEXT_PUBLIC_VOIDR_API_URL

export default function getImageSource(imageUrl) {
  return `${VOIDR_API_URL}${imageUrl}`
}
