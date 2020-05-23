'use strict';
const Controller = require('egg').Controller;
class MenuController extends Controller {
  async add() {
    const { name } = this.ctx.request.body;
    if (!name) {
      this.ctx.result({ success: false, msg: 'name不能为空！' });
    } else {
      this.ctx.result(
        await this.service.bladeSys.menu.add(this.ctx.request.body)
      );
    }
  }
  async update() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.ctx.result(await this.service.bladeSys.menu.update(this.ctx.request.body));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
  async delete() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.ctx.result(await this.service.bladeSys.menu.delete(this.ctx.request.body));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
  async list() {
    this.ctx.result(await this.service.bladeSys.menu.list(this.ctx.query));
  }
  async tree() {
    this.ctx.result(await this.service.bladeSys.menu.tree(this.ctx.query));
  }
  async detail() {
    const { id } = this.ctx.query;
    if (id) {
      this.ctx.result(await this.service.bladeSys.menu.detail(this.ctx.query));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
}
module.exports = MenuController;
