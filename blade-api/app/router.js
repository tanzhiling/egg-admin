'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 应用模块
  router.post('/blade-sys/module/add', controller.sys.module.add);
  router.post('/blade-sys/module/update', controller.sys.module.update);
  router.post('/blade-sys/module/delete', controller.sys.module.delete);
  router.get('/blade-sys/module/list', controller.sys.module.list);
  router.get('/blade-sys/module/detail', controller.sys.module.detail);
  // 用户模块
  router.post('/blade-sys/user/add', controller.sys.user.add);
  router.post('/blade-sys/user/update', controller.sys.user.update);
  router.post('/blade-sys/user/delete', controller.sys.user.delete);
  router.get('/blade-sys/user/list', controller.sys.user.list);
  router.get('/blade-sys/user/detail', controller.sys.user.detail);
  router.post('/blade-sys/user/login', controller.sys.user.login);
  router.post('/blade-sys/user/register', controller.sys.user.add);
  // 机构模块
  router.post('/blade-sys/office/add', controller.sys.office.add);
  router.post('/blade-sys/office/update', controller.sys.office.update);
  router.post('/blade-sys/office/delete', controller.sys.office.delete);
  router.get('/blade-sys/office/list', controller.sys.office.list);
  router.get('/blade-sys/office/detail', controller.sys.office.detail);
  router.get('/blade-sys/office/tree', controller.sys.office.tree);
  // 字典
  router.post('/blade-sys/dict/typeAdd', controller.sys.dict.typeAdd);
  router.post('/blade-sys/dict/typeUpdate', controller.sys.dict.typeUpdate);
  router.post('/blade-sys/dict/typeDelete', controller.sys.dict.typeDelete);
  router.get('/blade-sys/dict/typeList', controller.sys.dict.typeList);
  router.get('/blade-sys/dict/typeDetail', controller.sys.dict.typeDetail);
  router.post('/blade-sys/dict/dataAdd', controller.sys.dict.dataAdd);
  router.post('/blade-sys/dict/dataUpdate', controller.sys.dict.dataUpdate);
  router.post('/blade-sys/dict/dataDelete', controller.sys.dict.dataDelete);
  router.get('/blade-sys/dict/dataList', controller.sys.dict.dataList);
  router.get('/blade-sys/dict/dataDetail', controller.sys.dict.dataDetail);
  router.get('/blade-sys/dict/findList', controller.sys.dict.findList);
};
