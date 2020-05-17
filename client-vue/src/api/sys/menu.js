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
export const ApiGetMenuDetail = (params) => {
  return request("/blade-sys/menu/detail", {
    method: "get",
    params,
  });
};
