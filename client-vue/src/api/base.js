import request from '@/utils/request'
// 上传
export const Apiupload = (data) => {
  return request('/blade-base/upload/avatar', {
    method: 'post',
    data,
    requestType: 'file',
  })
}
