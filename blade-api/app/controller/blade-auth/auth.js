'use strict';
const Controller = require('egg').Controller;
class AuthController extends Controller {
  async token() {
    const { username, password } = this.ctx.request.body;
    if (!username) {
      this.ctx.result({ success: false, msg: 'username不能为空' });
    } else if (!password) {
      this.ctx.result({ success: false, msg: 'password不能为空' });
    } else {
      this.ctx.result(await this.service.bladeAuth.auth.token({ username, password }));
    }
  }
}
module.exports = AuthController;
