'use strict';
const Service = require('egg').Service;
const Uuid = require('node-uuid');
class BaseService extends Service {
  // 创建唯一key
  async createUuid() {
    return Uuid.v1();
  }
}
module.exports = BaseService;
