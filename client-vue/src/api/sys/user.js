import request from '@/utils/request'
//新增用户
export const ApiUserAdd = (data) =>{
  return request('/blade-sys/user/add', {
    method: 'post',
    data,
    requestType: "form",
  })
}
// 修改用户
export const ApiUserUpdate = (data) => {
  return request("/blade-sys/user/update", {
    method: "post",
    data,
    requestType: "form",
  });
};
// 删除用户
export const ApiUserDelete = (data)=>{
  return request("/blade-sys/user/delete", {
    method: "post",
    data,
    requestType: "form",
  });
}
//获取用户列表
export const ApiGetUserList = (params) => {
  return request('/blade-sys/user/list', {
    method: 'get',
    params,
  })
}
//获取用户详情
export const ApiGetUserDetail =(params)=>{
  return request("/blade-sys/user/detail",{
    method: 'get',
    params,
  })
}
