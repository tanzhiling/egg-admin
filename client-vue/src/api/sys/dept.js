import request from "@/utils/request";
export const ApiDeptAdd = (data) => {
  return request("/blade-sys/dept/add", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiDeptUpdate= (data) => {
  return request("/blade-sys/dept/update", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiDeptDelete = (data) => {
  return request("/blade-sys/dept/delete", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiGetDeptList = (params) => {
  return request("/blade-sys/dept/list", {
    method: "get",
    params,
  });
};
export const ApiGetDeptDetail = (params) => {
  return request("/blade-sys/dept/detail", {
    method: "get",
    params,
  });
};
