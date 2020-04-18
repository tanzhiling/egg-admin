'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/blade-sys/module/create', controller.sys.module.create);
  router.post('/blade-sys/module/update', controller.sys.module.update);
  router.post('/blade-sys/module/delete', controller.sys.module.delete);
  router.get('/blade-sys/module/list', controller.sys.module.list);
  router.get('/blade-sys/module/detail', controller.sys.module.detail);

  router.post('/blade-sys/user/register', controller.sys.user.create);
  router.post('/blade-sys/user/update', controller.sys.user.update);
  router.post('/blade-sys/user/delete', controller.sys.user.delete);
  router.get('/blade-sys/user/list', controller.sys.user.list);
  router.get('/blade-sys/user/detail', controller.sys.user.detail);
  router.post('/blade-sys/user/login', controller.sys.user.login);
};
