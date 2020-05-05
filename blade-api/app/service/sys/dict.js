'use strict';
const Service = require('../base');
class DictService extends Service {
  async typeAdd(params) {
    const userBy = await this.userBy();
    const [ result, status ] = await this.ctx.model.SysDictType._add(
      Object.assign(
        params,
        {
          id: await this.createUuid(),
          createBy: userBy,
          updateBy: userBy,
        }
      )
    );
    if (status) {
      return { msg: '新增成功！', success: status };
    }
    return { msg: result.dictType + '已经存在', success: false };
  }
  async typeList(params) {
    const data = await this.ctx.model.SysDictType._findList(params);
    return { msg: '查询成功！', success: true, data };
  }
  async typeDetail(params) {
    const data = await this.ctx.model.SysDictType._findOne(params);
    return { msg: '查询成功！', success: true, data };
  }
  async typeUpdate(params) {
    params.updateBy = await this.userBy();
    const data = await this.ctx.model.SysDictType._update(params);
    if (data) {
      return { msg: '更新成功！', success: true };
    }
    return { msg: '更新失败', success: false };
  }
  async typeDelete(params) {
    const status = await this.ctx.model.SysDictType._delete(params);
    if (status) {
      return { msg: '删除成功！', success: true };
    }
    return { msg: '找不到这条数据', success: false };
  }
  async dataAdd(params) {
    const userBy = await this.userBy();
    const { data, success, msg } = await this.ctx.model.SysDictData._add(
      Object.assign(
        params,
        {
          id: await this.createUuid(),
          createBy: userBy,
          updateBy: userBy,
        }
      )
    );
    return { data, success, msg };
  }
  async dataList(params) {
    const data = await this.ctx.model.SysDictData._findList(params);
    return { msg: '查询成功！', success: true, data };
  }
  async dataDetail(params) {
    const data = await this.ctx.model.SysDictData._findOne(params);
    return { msg: '查询成功！', success: true, data };
  }
  async dataUpdate(params) {
    params.updateBy = await this.userBy();
    const data = await this.ctx.model.SysDictData._update(params);
    if (data) {
      return { msg: '更新成功！', success: true };
    }
    return { msg: '更新失败', success: false };
  }
  async dataDelete(params) {
    const status = await this.ctx.model.SysDictData._delete(params);
    if (status) {
      return { msg: '删除成功！', success: true };
    }
    return { msg: '找不到这条数据', success: false };
  }
  async findList(params) {
    const data = await this.ctx.model.SysDictData._findList(params, true);
    return { msg: '查询成功！', success: true, data };
  }
}
module.exports = DictService;
