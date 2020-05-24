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
  // 机构
  router.post('/blade-sys/dept/add', controller.bladeSys.dept.add);
  router.post('/blade-sys/dept/update', controller.bladeSys.dept.update);
  router.post('/blade-sys/dept/delete', controller.bladeSys.dept.delete);
  router.get('/blade-sys/dept/list', controller.bladeSys.dept.list);
  router.get('/blade-sys/dept/tree', controller.bladeSys.dept.tree);
  router.get('/blade-sys/dept/detail', controller.bladeSys.dept.detail);
  // 角色
  router.post('/blade-sys/role/add', controller.bladeSys.role.add);
  router.post('/blade-sys/role/update', controller.bladeSys.role.update);
  router.post('/blade-sys/role/delete', controller.bladeSys.role.delete);
  router.get('/blade-sys/role/list', controller.bladeSys.role.list);
  router.get('/blade-sys/role/dict', controller.bladeSys.role.dict);
  router.get('/blade-sys/role/detail', controller.bladeSys.role.detail);
  // 岗位
  router.post('/blade-sys/post/add', controller.bladeSys.post.add);
  router.post('/blade-sys/post/update', controller.bladeSys.post.update);
  router.post('/blade-sys/post/delete', controller.bladeSys.post.delete);
  router.get('/blade-sys/post/list', controller.bladeSys.post.list);
  router.get('/blade-sys/post/dict', controller.bladeSys.post.dict);
  router.get('/blade-sys/post/detail', controller.bladeSys.post.detail);
  // 租户
  router.post('/blade-sys/tenant/add', controller.bladeSys.tenant.add);
  router.post('/blade-sys/tenant/update', controller.bladeSys.tenant.update);
  router.post('/blade-sys/tenant/delete', controller.bladeSys.tenant.delete);
  router.get('/blade-sys/tenant/list', controller.bladeSys.tenant.list);
  router.get('/blade-sys/tenant/dict', controller.bladeSys.tenant.dict);
  router.get('/blade-sys/tenant/detail', controller.bladeSys.tenant.detail);
  // 菜单
  router.post('/blade-sys/menu/add', controller.bladeSys.menu.add);
  router.post('/blade-sys/menu/update', controller.bladeSys.menu.update);
  router.post('/blade-sys/menu/delete', controller.bladeSys.menu.delete);
  router.get('/blade-sys/menu/list', controller.bladeSys.menu.list);
  router.get('/blade-sys/menu/tree', controller.bladeSys.menu.tree);
  router.get('/blade-sys/menu/detail', controller.bladeSys.menu.detail);
  router.post('/blade-sys/menu/addBtn', controller.bladeSys.menu.addBtn);
  router.post('/blade-sys/menu/updateBtn', controller.bladeSys.menu.updateBtn);
  router.post('/blade-sys/menu/deleteBtn', controller.bladeSys.menu.deleteBtn);
  router.get('/blade-sys/menu/listBtn', controller.bladeSys.menu.listBtn);
  // 文件处理
  router.post('/blade-base/upload/avatar', controller.bladeBase.upload.avatar);
};
