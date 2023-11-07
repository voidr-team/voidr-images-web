import http from './http'

async function getImages(pageNumber = 1, limit = 10) {
  const response = await http.get(`/images/?page=${pageNumber}&limit=${limit}`)

  return response
}

async function getImageVariations(id) {
  const response = await http.get(`/images/${id}/relatives`)

  return response
}

const swrKeys = {
  GET_IMAGES: 'GET_IMAGES',
  GET_IMAGE_VARIATIONS: 'GET_IMAGE_VARIATIONS',
}

const imagesDashboard = {
  getImages,
  getImageVariations,
  swrKeys,
}

export default imagesDashboard
