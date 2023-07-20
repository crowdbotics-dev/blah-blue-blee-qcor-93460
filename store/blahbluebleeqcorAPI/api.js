import axios from "axios"
const blahbluebleeqcorAPI = axios.create({
  baseURL: "https://blah-blue-blee-qcor-93460.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return blahbluebleeqcorAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return blahbluebleeqcorAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return blahbluebleeqcorAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_test_list(payload) {
  return blahbluebleeqcorAPI.get(`/api/v1/test/`)
}
function api_v1_test_create(payload) {
  return blahbluebleeqcorAPI.post(`/api/v1/test/`, payload)
}
function api_v1_test_retrieve(payload) {
  return blahbluebleeqcorAPI.get(`/api/v1/test/${payload.id}/`)
}
function api_v1_test_update(payload) {
  return blahbluebleeqcorAPI.put(`/api/v1/test/${payload.id}/`, payload)
}
function api_v1_test_partial_update(payload) {
  return blahbluebleeqcorAPI.patch(`/api/v1/test/${payload.id}/`, payload)
}
function api_v1_test_destroy(payload) {
  return blahbluebleeqcorAPI.delete(`/api/v1/test/${payload.id}/`)
}
function api_v1_tttt_list(payload) {
  return blahbluebleeqcorAPI.get(`/api/v1/tttt/`)
}
function api_v1_tttt_create(payload) {
  return blahbluebleeqcorAPI.post(`/api/v1/tttt/`, payload)
}
function api_v1_tttt_retrieve(payload) {
  return blahbluebleeqcorAPI.get(`/api/v1/tttt/${payload.id}/`)
}
function api_v1_tttt_update(payload) {
  return blahbluebleeqcorAPI.put(`/api/v1/tttt/${payload.id}/`, payload)
}
function api_v1_tttt_partial_update(payload) {
  return blahbluebleeqcorAPI.patch(`/api/v1/tttt/${payload.id}/`, payload)
}
function api_v1_tttt_destroy(payload) {
  return blahbluebleeqcorAPI.delete(`/api/v1/tttt/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return blahbluebleeqcorAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return blahbluebleeqcorAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return blahbluebleeqcorAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return blahbluebleeqcorAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return blahbluebleeqcorAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return blahbluebleeqcorAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return blahbluebleeqcorAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return blahbluebleeqcorAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return blahbluebleeqcorAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return blahbluebleeqcorAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return blahbluebleeqcorAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_test_list,
  api_v1_test_create,
  api_v1_test_retrieve,
  api_v1_test_update,
  api_v1_test_partial_update,
  api_v1_test_destroy,
  api_v1_tttt_list,
  api_v1_tttt_create,
  api_v1_tttt_retrieve,
  api_v1_tttt_update,
  api_v1_tttt_partial_update,
  api_v1_tttt_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
