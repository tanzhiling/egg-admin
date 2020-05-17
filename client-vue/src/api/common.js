import request from '@/utils/request'
// 上传
export const ApiLogin = (data) => {
  return request('/blade-upload/file/upload', {
    method: 'post',
    data,
    requestType: 'file',
  })
}
