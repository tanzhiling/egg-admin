'use strict';
const Controller = require('egg').Controller;
class DeptController extends Controller {
  async add() {
    const { deptCode } = this.ctx.request.body;
    if (!deptCode) {
      this.ctx.result({ success: false, msg: 'deptCode不能为空！' });
    } else {
      this.ctx.result(
        await this.service.bladeSys.dept.add(this.ctx.request.body)
      );
    }
  }
  async update() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.ctx.result(await this.service.bladeSys.dept.update(this.ctx.request.body));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
  async delete() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.ctx.result(await this.service.bladeSys.dept.delete(this.ctx.request.body));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
  async list() {
    this.ctx.result(await this.service.bladeSys.dept.list(this.ctx.query));
  }
  async detail() {
    const { id } = this.ctx.query;
    if (id) {
      this.ctx.result(await this.service.bladeSys.dept.detail(this.ctx.query));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
}
module.exports = DeptController;
