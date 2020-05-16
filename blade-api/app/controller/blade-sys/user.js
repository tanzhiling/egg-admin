'use strict';
const Controller = require('egg').Controller;
class UserController extends Controller {
  async add() {
    const { username, nickname } = this.ctx.request.body;
    if (!username) {
      this.ctx.result({ success: false, msg: '用户名不能为空！' });
    } else if (!nickname) {
      this.ctx.result({ success: false, msg: '昵称不能为空！' });
    } else {
      this.ctx.result(
        await this.service.bladeSys.user.add(this.ctx.request.body)
      );
    }
  }
  async update() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.ctx.result(await this.service.bladeSys.user.update(this.ctx.request.body));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
  async delete() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.ctx.result(await this.service.bladeSys.user.delete(this.ctx.request.body));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
  async list() {
    this.ctx.result(await this.service.bladeSys.user.list(this.ctx.query));
  }
  async detail() {
    const { id } = this.ctx.query;
    if (id) {
      this.ctx.result(await this.service.bladeSys.user.detail(this.ctx.query));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
}
module.exports = UserController;
