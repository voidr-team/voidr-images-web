const { default: http } = require('./http')

async function getImages(pageNumber = 1) {
  const response = await http.get(`/images/?page=${pageNumber}`)

  return response
}

const swrKeys = {
  GET_IMAGES: 'GET_IMAGES',
}

export default {
  getImages,
  swrKeys,
}
