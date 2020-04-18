'use strict';
const Service = require('egg').Service;
const Uuid = require('node-uuid');
const crypto = require('crypto');
class BaseService extends Service {
  // 创建唯一key
  async createUuid() {
    return Uuid.v1();
  }
  // md5加密
  async md5(content) {
    return crypto.createHash('md5').update(content).digest('hex');
  }
}
module.exports = BaseService;
