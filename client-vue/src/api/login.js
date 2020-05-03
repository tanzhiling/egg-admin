import request from '@/utils/request'

// 登录
export const ApiLogin = (data) => {
  return request('/blade-sys/user/login', {
    method: 'post',
    data,
    requestType: 'form',
  })
}
