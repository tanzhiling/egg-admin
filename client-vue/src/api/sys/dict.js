import request from "@/utils/request";
//新增字典类型
export const ApiDictTypeAdd = (data) => {
  return request("/blade-sys/dict/typeAdd", {
    method: "post",
    data,
    requestType: "form",
  });
};
// 修改字典类型
export const ApiDictTypeUpdate = (data) => {
  return request("/blade-sys/dict/typeUpdate", {
    method: "post",
    data,
    requestType: "form",
  });
};
// 删除字典类型
export const ApiDictTypeDelete = (data)=>{
  return request("/blade-sys/dict/typeDelete", {
    method: "post",
    data,
    requestType: "form",
  });
}
// 字典类型列表
export const ApiGetDictTypeList = (params) => {
  return request("/blade-sys/dict/typeList", {
    method: "get",
    params,
  });
};
// 字典类型详情
export const ApiGetDictTypeDetail = (params) => {
  return request("/blade-sys/dict/typeDetail", {
    method: "get",
    params,
  });
};
// 新增字典数据
export const ApiDictDataAdd = (data) => {
  return request("/blade-sys/dict/dataAdd", {
    method: "post",
    data,
    requestType: "form",
  });
};
// 修改字典数据
export const ApiDictDataUpdate = (data) => {
  return request("/blade-sys/dict/dataUpdate", {
    method: "post",
    data,
    requestType: "form",
  });
};
// 删除字典数据
export const ApiDictDataDelete = (data)=>{
  return request("/blade-sys/dict/dataDelete",{
    method:"post",
    data,
    requestType: "form",
  })
}
//字典数据列表
export const ApiGetDictDataList = (params) => {
  return request("/blade-sys/dict/dataList", {
    method: "get",
    params,
  });
};
// 字典数据详情
export const ApiGetDictDataDetail = (params)=>{
  return request("/blade-sys/dict/dataDetail",{
    method:"get",
    params
  })
}
