import request from "@/utils/request";
// 新增机构
export const ApiOfficeAdd = (data) => {
  return request("/blade-sys/office/add", {
    method: "post",
    data,
    requestType: "form",
  });
};
// 修改机构
export const ApiOfficeUpdate= (data) => {
  return request("/blade-sys/office/update", {
    method: "post",
    data,
    requestType: "form",
  });
};
// 删除机构
export const ApiOfficeDelete = (data) => {
  return request("/blade-sys/office/delete", {
    method: "post",
    data,
    requestType: "form",
  });
};
// 机构列表
export const ApiGetOfficeList = (params) => {
  return request("/blade-sys/office/list", {
    method: "get",
    params,
  });
};
// 机构树
export const ApiGetOfficeTree = (params) => {
  return request("/blade-sys/office/tree", {
    method: "get",
    params,
  });
};
// 机构详情
export const ApiGetOfficeDetail = (params) => {
  return request("/blade-sys/office/detail", {
    method: "get",
    params,
  });
};
