import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/permit/wlkj/getToken',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  token = token.substring(6)
  return request({
    url: '/api/permit/checkToken',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
