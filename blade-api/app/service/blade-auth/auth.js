'use strict';
const Service = require('egg').Service;
class AuthService extends Service {
  async token(params) {
    const hasUser = await this.ctx.model.BladeUser._findOne({ username: params.username });
    if (hasUser) {
      const password = this.ctx.helper.md5(params.password);
      const data = await this.ctx.model.BladeUser._findOne({ username: params.username, password });
      if (data) {
        const token = this.ctx.jwtSign(data);
        return { msg: '登录成功！', success: true, data, token };
      }
      return { msg: '用户密码不正确！', success: false };
    }
    return { msg: '当前用户未注册！', success: false };
  }
}
module.exports = AuthService;
