'use strict';
const Service = require('egg').Service;
class MenuService extends Service {
  async add(params) {
    params.id = this.ctx.helper.uuid();
    const [ result, status ] = await this.ctx.model.BladeMenu._add(params);
    if (status) {
      return { msg: '新增成功！', success: status };
    }
    return { msg: result.id + '已经存在', success: false };
  }
  async update(params) {
    const data = await this.ctx.model.BladeMenu._update(params);
    if (data) {
      return { msg: '更新成功！', success: true };
    }
    return { msg: '更新失败', success: false };
  }
  async delete(params) {
    const status = await this.ctx.model.BladeMenu._delete(params);
    if (status) {
      return { msg: '删除成功！', success: true };
    }
    return { msg: '找不到这条数据', success: false };
  }
  async list(params) {
    const data = await this.ctx.model.BladeMenu._findList(params);
    return { msg: '查询成功！', success: true, data };
  }
  async tree(params) {
    const result = await this.ctx.model.BladeMenu._findTree(params);
    const data = this.ctx.helper.renderTree(result, '0');
    return { msg: '查询成功！', success: true, data };
  }
  async detail({ id }) {
    const data = await this.ctx.model.BladeMenu._findOne({ id });
    return { msg: '查询成功！', success: true, data };
  }
}
module.exports = MenuService;
