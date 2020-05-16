'use strict';
const Controller = require('egg').Controller;
class RoleController extends Controller {
  async add() {
    const { roleName } = this.ctx.request.body;
    if (!roleName) {
      this.ctx.result({ success: false, msg: 'roleName不能为空！' });
    } else {
      this.ctx.result(
        await this.service.bladeSys.role.add(this.ctx.request.body)
      );
    }
  }
  async update() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.ctx.result(await this.service.bladeSys.role.update(this.ctx.request.body));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
  async delete() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.ctx.result(await this.service.bladeSys.role.delete(this.ctx.request.body));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
  async list() {
    this.ctx.result(await this.service.bladeSys.role.list(this.ctx.query));
  }
  async detail() {
    const { id } = this.ctx.query;
    if (id) {
      this.ctx.result(await this.service.bladeSys.role.detail(this.ctx.query));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
}
module.exports = RoleController;
