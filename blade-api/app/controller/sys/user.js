'use strict';
const Controller = require('../base');
class UserController extends Controller {
  // 新增模块
  async add() {
    const { username, nickname } = this.ctx.request.body;
    if (!username) {
      this.result({ success: false, msg: '用户名不能为空！' });
    } else if (!nickname) {
      this.result({ success: false, msg: '昵称不能为空！' });
    } else {
      this.result(
        await this.service.sys.user.add(this.ctx.request.body)
      );
    }
  }
  // 修改
  async update() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.result(await this.service.sys.user.update(this.ctx.request.body));
    } else {
      this.result({ success: false, msg: 'id不能为空' });
    }
  }
  // 删除
  async delete() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.result(await this.service.sys.user.delete(this.ctx.request.body));
    } else {
      this.result({ success: false, msg: 'userCode不能为空' });
    }
  }
  // 列表
  async list() {
    this.result(await this.service.sys.user.list(this.ctx.query));
  }
  // 详情
  async detail() {
    const { id } = this.ctx.query;
    if (id) {
      this.result(await this.service.sys.user.detail(this.ctx.query));
    } else {
      this.result({ success: false, msg: 'userCode不能为空' });
    }
  }
  // 登录
  async login() {
    const { username, password } = this.ctx.request.body;
    if (!username) {
      this.result({ success: false, msg: 'username不能为空' });
    } else if (!password) {
      this.result({ success: false, msg: 'password不能为空' });
    } else {
      this.result(await this.service.sys.user.login({ username, password }));
    }
  }
}
module.exports = UserController;
