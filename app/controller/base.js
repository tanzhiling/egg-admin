'use strict';
const Controller = require('egg').Controller;
// 基类封装
class BaseController extends Controller {
  // api接口返回
  async result({ success, msg, data, ...other }) {
    if (success) {
      this.ctx.body = { success, msg, code: 200, data, ...other };
    } else {
      this.ctx.body = { success, msg, code: 400 };
    }
  }
  // 获取当前时间
  async currentDate() {
    return new Date().toISOString();
  }
}
module.exports = BaseController;
