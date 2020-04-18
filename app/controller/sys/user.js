'use strict';
const Controller = require('../base');
class ModuleController extends Controller {
  // 新增模块
  async create() {
    const { user_name, nick_name, password, create_by } = this.ctx.request.body;
    const currentDate = await this.currentDate();
    if (!user_name) {
      this.result({ success: false, msg: 'user_name不能为空' });
    } else if (!nick_name) {
      this.result({ success: false, msg: 'nick_name不能为空' });
    } else if (!password) {
      this.result({ success: false, msg: 'password不能为空' });
    } else {
      this.result(
        await this.service.sys.user.create({
          user_name,
          nick_name,
          password,
          create_by,
          update_by: create_by,
          create_date: currentDate,
          update_date: currentDate,
        })
      );
    }
  }
  // 修改
  async update() {
    const update_date = await this.currentDate();
    const {
      id,
      nick_name,
      password,
      update_by,
      remarks,
    } = this.ctx.request.body;
    if (id) {
      this.result(
        await this.service.sys.user.update(
          {
            nick_name,
            password,
            update_by,
            update_date,
            remarks,
          },
          id
        )
      );
    } else {
      this.result({ success: false, msg: 'id不能为空' });
    }
  }
  // 删除
  async delete() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.result(await this.service.sys.user.delete({ user_code: id }));
    } else {
      this.result({ success: false, msg: 'id不能为空' });
    }
  }
  // 列表
  async list() {
    const { module_name, status } = this.ctx.query;
    this.result(await this.service.sys.user.list({ module_name, status }));
  }
  // 详情
  async detail() {
    const { id } = this.ctx.query;
    if (id) {
      this.result(await this.service.sys.user.detail({ user_code: id }));
    } else {
      this.result({ success: false, msg: 'id不能为空' });
    }
  }
  // 登录
  async login() {
    const { user_name, password } = this.ctx.request.body;
    if (!user_name) {
      this.result({ success: false, msg: 'user_name不能为空' });
    } else if (!password) {
      this.result({ success: false, msg: 'password不能为空' });
    } else {
      this.result(await this.service.sys.user.login({ user_name, password }));
    }
  }
}
module.exports = ModuleController;
