'use strict';
const Service = require('../base');
const jwt = require('jsonwebtoken');
class UserService extends Service {
  // 新增
  async create(params) {
    const user_code = await this.createUuid();
    const password = await this.md5(params.password);
    const [ result, status ] = await this.ctx.model.SysUser.findOrCreate({
      where: { user_name: params.user_name },
      defaults: Object.assign({}, params, {
        user_code,
        user_type: '1',
        mgr_type: '0',
        status: '0',
        password,
      }),
    });
    if (status) {
      return { msg: '新增成功！', success: status };
    }
    return { msg: result.user_name + '已经存在', success: false };
  }
  // 更新
  async update(params, id) {
    const data = await this.ctx.model.SysUser.update(params, {
      where: { user_code: id },
    });
    if (data) {
      return { msg: '更新成功！', success: true };
    }
    return { msg: '更新失败', success: false };
  }
  // 删除
  async delete(params) {
    const status = await this.ctx.model.SysUser.destroy({ where: params });
    if (status) {
      return { msg: '删除成功！', success: true };
    }
    return { msg: '找不到这条数据', success: false };
  }
  // 列表 支持page order
  async list(params) {
    const Op = this.app.Sequelize.Op;
    const { nick_name, status, size = 10, current = 1 } = params;
    const {
      rows: data,
      count: total,
    } = await this.ctx.model.SysUser.findAndCountAll({
      attributes: this.attributes,
      where: {
        [Op.and]: [
          nick_name ? { nick_name } : null,
          status ? { status } : null,
        ],
      },
      limit: size,
      offset: (current - 1) * size,
    });
    return { msg: '查询成功！', success: true, data, size, current, total };
  }
  // 详情
  async detail(params) {
    const data = await this.ctx.model.SysModule.findOne({
      where: params,
    });
    return { msg: '查询成功！', success: true, data };
  }
  // 登录
  async login(params) {
    const { user_name } = params;
    const Op = this.app.Sequelize.Op;
    const isUser = await this.ctx.model.SysUser.findOne({ where: { user_name } });
    if (isUser) {
      const password = await this.md5(params.password);
      const data = await this.ctx.model.SysUser.findOne({
        where: {
          [Op.and]: [{ password }, { user_name }],
        },
      });
      if (data) {
        const token = jwt.sign({ user_name }, this.config.jwt.secret, {
          expiresIn: 60 * 60 * 60 * 24,
        });
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
