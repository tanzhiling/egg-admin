'use strict';
const Controller = require('egg').Controller;
class TenantController extends Controller {
  async add() {
    const { tenantName, tenantId } = this.ctx.request.body;
    if (!tenantName) {
      this.ctx.result({ success: false, msg: 'tenantName不能为空！' });
    } else if (!tenantId) {
      this.ctx.result({ success: false, msg: 'tenantId不能为空！' });
    } else {
      this.ctx.result(
        await this.service.bladeSys.tenant.add(this.ctx.request.body)
      );
    }
  }
  async update() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.ctx.result(await this.service.bladeSys.tenant.update(this.ctx.request.body));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
  async delete() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.ctx.result(await this.service.bladeSys.tenant.delete(this.ctx.request.body));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
  async list() {
    this.ctx.result(await this.service.bladeSys.tenant.list(this.ctx.query));
  }
  async detail() {
    const { id } = this.ctx.query;
    if (id) {
      this.ctx.result(await this.service.bladeSys.tenant.detail(this.ctx.query));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
}
module.exports = TenantController;
