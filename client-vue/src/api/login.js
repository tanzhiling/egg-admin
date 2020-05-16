import request from '@/utils/request'

// 登录
export const ApiLogin = (data) => {
  return request('/blade-auth/auth/token', {
    method: 'post',
    data,
    requestType: 'form',
  })
}
