'use strict';
const Service = require('../base');
class UserService extends Service {
  // 新增
  async add(params) {
    const userBy = await this.userBy();
    const [ result, status ] = await this.ctx.model.SysUser._add(
      Object.assign(
        params,
        {
          id: await this.createUuid(),
          createBy: userBy,
          updateBy: userBy,
          password: await this.md5(params.password ? params.password : '123456'),
        }
      )
    );
    if (status) {
      return { msg: '新增成功！', success: status };
    }
    return { msg: result.username + '已经存在', success: false };
  }
  // 更新
  async update(params) {
    const data = await this.ctx.model.SysUser._update(params);
    if (data) {
      return { msg: '更新成功！', success: true };
    }
    return { msg: '更新失败', success: false };
  }
  // 删除
  async delete(params) {
    const status = await this.ctx.model.SysUser._delete(params);
    if (status) {
      return { msg: '删除成功！', success: true };
    }
    return { msg: '找不到这条数据', success: false };
  }
  // 列表 支持page order
  async list(params) {
    const data = await this.ctx.model.SysUser._findList(params);
    return { msg: '查询成功！', success: true, data };
  }
  // 详情
  async detail(params) {
    const data = await this.ctx.model.SysUser._findOne(params);
    return { msg: '查询成功！', success: true, data };
  }
  // 登录
  async login(params) {
    const { username } = params;
    const Op = this.app.Sequelize.Op;
    const isUser = await this.ctx.model.SysUser.findOne({
      where: { username },
    });
    if (isUser) {
      const password = await this.md5(params.password);
      const data = await this.ctx.model.SysUser.findOne({
        where: {
          [Op.and]: [{ password }, { username }],
        },
        raw: true,
      });
      if (data) {
        const token = await this.jwtSign(data);
        return {
          msg: '登录成功！',
          success: true,
          data,
          token,
        };
      }
      return { msg: '用户密码不正确！', success: false };
    }
    return { msg: '当前用户未注册！', success: false };
  }
}
module.exports = UserService;
