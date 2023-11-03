import http from './http'

async function getImages(pageNumber = 1) {
  const response = await http.get(`/images/?page=${pageNumber}`)

  return response
}

const swrKeys = {
  GET_IMAGES: 'GET_IMAGES',
}

const imagesDashboard = {
  getImages,
  swrKeys,
}

export default imagesDashboard
