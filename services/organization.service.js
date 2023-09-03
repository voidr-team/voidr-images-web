const { default: http } = require('./http')

async function getOrganizations() {
  const result = await http.get('/organization/members')

  return result
}

export default { getOrganizations }
