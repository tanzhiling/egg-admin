import request from "@/utils/request";
export const ApiTenantAdd = (data) => {
  return request("/blade-sys/tenant/add", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiTenantUpdate= (data) => {
  return request("/blade-sys/tenant/update", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiTenantDelete = (data) => {
  return request("/blade-sys/tenant/delete", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiGetTenantList = (params) => {
  return request("/blade-sys/tenant/list", {
    method: "get",
    params,
  });
};
export const ApiGetTenantDict = (params) => {
  return request("/blade-sys/tenant/dict", {
    method: "get",
    params,
  });
};
export const ApiGetTenantDetail = (params) => {
  return request("/blade-sys/tenant/detail", {
    method: "get",
    params,
  });
};
