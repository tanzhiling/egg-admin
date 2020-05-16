import request from "@/utils/request";
export const ApiPostAdd = (data) => {
  return request("/blade-sys/post/add", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiPostUpdate= (data) => {
  return request("/blade-sys/post/update", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiPostDelete = (data) => {
  return request("/blade-sys/post/delete", {
    method: "post",
    data,
    requestType: "form",
  });
};
export const ApiGetPostList = (params) => {
  return request("/blade-sys/post/list", {
    method: "get",
    params,
  });
};
export const ApiGetPostDetail = (params) => {
  return request("/blade-sys/post/detail", {
    method: "get",
    params,
  });
};
