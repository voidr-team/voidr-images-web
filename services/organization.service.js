import http from './http'

async function getOrganizationMembers() {
  const result = await http.get('/organization/members')

  return result
}

export default { getOrganizationMembers }
