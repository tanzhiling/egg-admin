'use strict';
const Service = require('egg').Service;
const Uuid = require('node-uuid');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
class BaseService extends Service {
  // 创建唯一key
  async createUuid() {
    return Uuid.v1().replace(/-/g, '');
  }
  // md5加密
  async md5(content) {
    return crypto.createHash('md5').update(content).digest('hex');
  }
  // 获取当前时间
  async currentDate() {
    return new Date().toISOString();
  }
  // 生成jwt
  async jwtSign(data) {
    return jwt.sign(data, this.config.jwt.secret, {
      expiresIn: 60 * 60 * 60 * 24,
    });
  }
  // 验证jwt
  async jwtVerify(bladeAuth) {
    try {
      return jwt.verify(bladeAuth, this.config.jwt.secret);
    } catch (err) {
      return err;
    }
  }
  // 解析jwt
  async jwtDecode() {
    const token = this.ctx.request.header['blade-auth'];
    if (token) {
      return jwt.decode(token);
    }
  }
  // 获取当前人
  async userBy() {
    const userInfo = await this.jwtDecode();
    return userInfo.username ? userInfo.username : '';
  }
  // 获取当前修改时间以及修改人
  async updateByOrDate() {
    const currentDate = await this.currentDate();
    const userInfo = await this.jwtDecode();
    return {
      updateDate: currentDate,
      updateBy: userInfo.user_name ? userInfo.user_name : '',
    };
  }
  // 获取当前创建时间以及修改人
  async createByOrDate() {
    const currentDate = await this.currentDate();
    const userInfo = await this.jwtDecode();
    return {
      createDate: currentDate,
      createBy: userInfo.user_name ? userInfo.user_name : '',
    };
  }
}
module.exports = BaseService;
