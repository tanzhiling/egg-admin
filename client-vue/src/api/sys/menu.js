import request from "@/utils/request";
export const ApiMenuAdd = (data) => {
  return request("/blade-sys/menu/add", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiMenuUpdate= (data) => {
  return request("/blade-sys/menu/update", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiMenuDelete = (data) => {
  return request("/blade-sys/menu/delete", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiGetMenuList = (params) => {
  return request("/blade-sys/menu/list", {
    method: "get",
    params,
  });
};
export const ApiGetMenuTree = (params) => {
  return request("/blade-sys/menu/tree", {
    method: "get",
    params,
  });
};
export const ApiGetMenuDetail = (params) => {
  return request("/blade-sys/menu/detail", {
    method: "get",
    params,
  });
};
export const ApiMenuAddBtn = (data) => {
  return request("/blade-sys/menu/addBtn", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiMenuUpdateBtn= (data) => {
  return request("/blade-sys/menu/updateBtn", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiMenuDeleteBtn = (data) => {
  return request("/blade-sys/menu/deleteBtn", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiGetMenuListBtn = (params) => {
  return request("/blade-sys/menu/listBtn", {
    method: "get",
    params,
  });
};