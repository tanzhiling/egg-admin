'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 登录
  router.post('/blade-auth/auth/token', controller.bladeAuth.auth.token);
  // 用户管理
  router.post('/blade-sys/user/add', controller.bladeSys.user.add);
  router.post('/blade-sys/user/update', controller.bladeSys.user.update);
  router.post('/blade-sys/user/delete', controller.bladeSys.user.delete);
  router.get('/blade-sys/user/list', controller.bladeSys.user.list);
  router.get('/blade-sys/user/detail', controller.bladeSys.user.detail);
  // 字典
  router.post('/blade-sys/dict/typeAdd', controller.bladeSys.dict.typeAdd);
  router.post('/blade-sys/dict/typeUpdate', controller.bladeSys.dict.typeUpdate);
  router.post('/blade-sys/dict/typeDelete', controller.bladeSys.dict.typeDelete);
  router.get('/blade-sys/dict/typeList', controller.bladeSys.dict.typeList);
  router.get('/blade-sys/dict/typeDetail', controller.bladeSys.dict.typeDetail);
  router.post('/blade-sys/dict/dataAdd', controller.bladeSys.dict.dataAdd);
  router.post('/blade-sys/dict/dataUpdate', controller.bladeSys.dict.dataUpdate);
  router.post('/blade-sys/dict/dataDelete', controller.bladeSys.dict.dataDelete);
  router.get('/blade-sys/dict/dataList', controller.bladeSys.dict.dataList);
  router.get('/blade-sys/dict/dataDetail', controller.bladeSys.dict.dataDetail);
  router.get('/blade-sys/dict/findList', controller.bladeSys.dict.findList);
};
