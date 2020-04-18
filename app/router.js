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
};
