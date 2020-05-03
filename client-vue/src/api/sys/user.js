import request from '@/utils/request'

//获取用户列表
export const ApiGetUserList = (params) => {
  return request('/blade-sys/user/list', {
    method: 'get',
    params,
  })
}
