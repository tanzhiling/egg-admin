'use strict';
const Service = require('egg').Service;
class DictService extends Service {
  async typeAdd(params) {
    params.id = this.ctx.helper.uuid();
    const [ result, status ] = await this.ctx.model.BladeDictType._add(params);
    if (status) {
      return { msg: '新增成功！', success: status };
    }
    return { msg: result.dictType + '已经存在', success: false };
  }
  async typeUpdate(params) {
    const data = await this.ctx.model.BladeDictType._update(params);
    if (data) {
      return { msg: '更新成功！', success: true };
    }
    return { msg: '更新失败', success: false };
  }
  async typeDelete(params) {
    const status = await this.ctx.model.BladeDictType._delete(params);
    if (status) {
      return { msg: '删除成功！', success: true };
    }
    return { msg: '找不到这条数据', success: false };
  }
  async typeList(params) {
    const data = await this.ctx.model.BladeDictType._findList(params);
    return { msg: '查询成功！', success: true, data };
  }
  async typeDetail(params) {
    const data = await this.ctx.model.BladeDictType._findOne(params);
    return { msg: '查询成功！', success: true, data };
  }

  async dataAdd(params) {
    params.id = this.ctx.helper.uuid();
    const { data, success, msg } = await this.ctx.model.BladeDictData._add(params);
    return { data, success, msg };
  }
  async dataList(params) {
    const data = await this.ctx.model.BladeDictData._findList(params);
    return { msg: '查询成功！', success: true, data };
  }
  async dataDetail(params) {
    const data = await this.ctx.model.BladeDictData._findOne(params);
    return { msg: '查询成功！', success: true, data };
  }
  async dataUpdate(params) {
    const data = await this.ctx.model.BladeDictData._update(params);
    if (data) {
      return { msg: '更新成功！', success: true };
    }
    return { msg: '更新失败', success: false };
  }
  async dataDelete(params) {
    const status = await this.ctx.model.BladeDictData._delete(params);
    if (status) {
      return { msg: '删除成功！', success: true };
    }
    return { msg: '找不到这条数据', success: false };
  }
  async findList(params) {
    const data = await this.ctx.model.BladeDictData._findList(params, true);
    return { msg: '查询成功！', success: true, data };
  }
}
module.exports = DictService;
