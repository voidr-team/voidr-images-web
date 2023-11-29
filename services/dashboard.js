import http from './http'

async function getDashboard() {
  const response = await http.get(`/dashboard`)

  return response
}

const swrKeys = {
  GET_DASHBOARD: 'GET_DASHBOARD',
}

const dashboardService = {
  getDashboard,
  swrKeys,
}

export default dashboardService
