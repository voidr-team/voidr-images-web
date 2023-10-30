import http from './http'

async function postCreateProject(data) {
  const response = await http.post('/projects', { ...data })

  return response
}

const swrKeys = {
  POST_CREATE_PROJECT: 'POST_CREATE_PROJECT',
}

export default {
  swrKeys,
  postCreateProject,
}
