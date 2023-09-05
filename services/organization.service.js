import http from './http'

async function getOrganizationMembers() {
  const result = await http.get('/organization/members')

  return result
}

async function deleteOrganizationMember(userId) {
  const result = await http.delete(`/organization/members/${userId}`)

  return result
}

async function getOrganizationInvites() {
  const result = await http.get('/organization/invites')

  return result
}

async function deleteOrganizationInvite(inviteId) {
  const result = await http.delete(`/organization/invite/${inviteId}`)

  return result
}

export default {
  getOrganizationMembers,
  deleteOrganizationMember,
  getOrganizationInvites,
  deleteOrganizationInvite,
}
