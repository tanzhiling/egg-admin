'use strict';
const Service = require('egg').Service;
class PostService extends Service {
  async add(params) {
    params.id = this.ctx.helper.uuid();
    const [ result, status ] = await this.ctx.model.BladePost._add(params);
    if (status) {
      return { msg: '新增成功！', success: status };
    }
    return { msg: result.id + '已经存在', success: false };
  }
  async update(params) {
    const data = await this.ctx.model.BladePost._update(params);
    if (data) {
      return { msg: '更新成功！', success: true };
    }
    return { msg: '更新失败', success: false };
  }
  async delete(params) {
    const status = await this.ctx.model.BladePost._delete(params);
    if (status) {
      return { msg: '删除成功！', success: true };
    }
    return { msg: '找不到这条数据', success: false };
  }
  async list(params) {
    const data = await this.ctx.model.BladePost._findList(params);
    return { msg: '查询成功！', success: true, data };
  }
  async dict(params) {
    const data = await this.ctx.model.BladePost._findDict(params);
    return { msg: '查询成功！', success: true, data };
  }
  async detail({ id }) {
    const data = await this.ctx.model.BladePost._findOne({ id });
    return { msg: '查询成功！', success: true, data };
  }
}
module.exports = PostService;
