import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/permit/wlkj/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  token = token.substring(6)
  return request({
    url: '/api/permit/getInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/permit/logout',
    method: 'post'
  })
}
