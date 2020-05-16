'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  async add(params) {
    const userInfo = this.ctx.jwtDecode();
    if (userInfo) {
      params.id = this.ctx.helper.uuid();
      params.createUser = userInfo.username;
      params.password = this.ctx.helper.md5(params.password ? params.password : '123456');
      const [ result, status ] = await this.ctx.model.BladeUser._add(params);
      if (status) {
        return { msg: '新增成功！', success: status };
      }
      return { msg: result.username + '已经存在', success: false };
    }
    return { msg: '未登录！', success: false };
  }
  async update(params) {
    const data = await this.ctx.model.BladeUser._update(params);
    if (data) {
      return { msg: '更新成功！', success: true };
    }
    return { msg: '更新失败', success: false };
  }
  async delete(params) {
    const status = await this.ctx.model.BladeUser._delete(params);
    if (status) {
      return { msg: '删除成功！', success: true };
    }
    return { msg: '找不到这条数据', success: false };
  }
  async list(params) {
    const data = await this.ctx.model.BladeUser._findList(params);
    return { msg: '查询成功！', success: true, data };
  }
  async detail({ id }) {
    const data = await this.ctx.model.BladeUser._findOne({ id });
    return { msg: '查询成功！', success: true, data };
  }
}
module.exports = UserService;
