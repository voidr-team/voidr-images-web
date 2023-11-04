import http from './http'

async function postCreateProject(data) {
  const response = await http.post('/projects', { ...data })

  return response
}

async function getProject() {
  const response = await http.get('/projects')

  return response
}
async function updateDomain(domains) {
  const response = await http.put('/projects/domains', { domains })

  return response
}

const swrKeys = {
  POST_CREATE_PROJECT: 'POST_CREATE_PROJECT',
  GET_PROJECT: 'GET_PROJECT',
  UPDATE_DOMAIN: 'UPDATE_DOMAIN',
}

const projectService = {
  swrKeys,
  postCreateProject,
  getProject,
  updateDomain,
}

export default projectService
