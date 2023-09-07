import http from './http'

async function getOrganizationMembers() {
  const response = await http.get('/organization/members')

  return response
}

async function deleteOrganizationMember(userId) {
  const response = await http.delete(`/organization/members/${userId}`)

  return response
}

async function getOrganizationInvites() {
  const response = await http.get('/organization/invites')

  return response
}

async function deleteOrganizationInvite(inviteId) {
  const response = await http.delete(`/organization/invites/${inviteId}`)

  return response
}

async function getOrganizationRoles() {
  const response = await http.get('/organization/roles')

  return response
}

async function putAddRolesInMember(userId, roles) {
  const response = await http.put(`/organization/members/${userId}/roles`, {
    role: roles,
  })

  return response
}

async function postSendNewInvite(data) {
  const response = await http.post('/organization/invites', { ...data })

  return response
}

const swrKeys = {
  GET_ORGANIZATION_MEMBERS: 'GET_ORGANIZATION_MEMBERS',
  GET_ORGANIZATION_INVITES: 'GET_ORGANIZATION_INVITES',
  GET_ORGANIZATION_ROLES: 'GET_ORGANIZATION_ROLES',

  POST_ORGANIZATION_MEMBERS_ADD_ROLES: 'POST_ORGANIZATION_MEMBERS_ADD_ROLES',
  POST_ORGANIZATION_INVITES: 'POST_ORGANIZATION_INVITES',

  DELETE_ORGANIZATION_MEMBER: 'DELETE_ORGANIZATION_MEMBER',
  DELETE_ORGANIZATION_INVITE: 'DELETE_ORGANIZATION_INVITE',
}

export default {
  getOrganizationMembers,
  deleteOrganizationMember,
  getOrganizationInvites,
  deleteOrganizationInvite,
  getOrganizationRoles,
  putAddRolesInMember,
  postSendNewInvite,
  swrKeys,
}
