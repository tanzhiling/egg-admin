import request from "@/utils/request";
export const ApiRoleAdd = (data) => {
  return request("/blade-sys/role/add", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiRoleUpdate= (data) => {
  return request("/blade-sys/role/update", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiRoleDelete = (data) => {
  return request("/blade-sys/role/delete", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiGetRoleList = (params) => {
  return request("/blade-sys/role/list", {
    method: "get",
    params,
  });
};
export const ApiGetRoleDict = (params) => {
  return request("/blade-sys/role/dict", {
    method: "get",
    params,
  });
};
export const ApiGetRoleDetail = (params) => {
  return request("/blade-sys/role/detail", {
    method: "get",
    params,
  });
};
