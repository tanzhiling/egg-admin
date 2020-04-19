'use strict';
const Controller = require('../base');
class UserController extends Controller {
  // 新增模块
  async create() {
    const { userName, nickName, password } = this.ctx.request.body;
    if (!userName) {
      this.result({ success: false, msg: '用户名不能为空！' });
    } else if (!nickName) {
      this.result({ success: false, msg: '昵称不能为空！' });
    } else if (!password) {
      this.result({ success: false, msg: '密码不能为空！' });
    } else {
      this.result(
        await this.service.sys.user.create({
          userName,
          nickName,
          password,
        })
      );
    }
  }
  // 修改
  async update() {
    const { userCode, nickName, password, remarks } = this.ctx.request.body;
    if (userCode) {
      this.result(
        await this.service.sys.user.update(
          {
            nickName,
            password,
            remarks,
          },
          userCode
        )
      );
    } else {
      this.result({ success: false, msg: 'userCode不能为空' });
    }
  }
  // 删除
  async delete() {
    const { userCode } = this.ctx.request.body;
    if (userCode) {
      this.result(await this.service.sys.user.delete({ userCode }));
    } else {
      this.result({ success: false, msg: 'userCode不能为空' });
    }
  }
  // 列表
  async list() {
    this.result(await this.service.sys.user.list({}));
  }
  // 详情
  async detail() {
    const { userCode } = this.ctx.query;
    if (userCode) {
      this.result(await this.service.sys.user.detail({ userCode }));
    } else {
      this.result({ success: false, msg: 'userCode不能为空' });
    }
  }
  // 登录
  async login() {
    const { userName, password } = this.ctx.request.body;
    if (!userName) {
      this.result({ success: false, msg: 'userName不能为空' });
    } else if (!password) {
      this.result({ success: false, msg: 'password不能为空' });
    } else {
      this.result(await this.service.sys.user.login({ userName, password }));
    }
  }
}
module.exports = UserController;
