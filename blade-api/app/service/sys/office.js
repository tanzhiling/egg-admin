'use strict';
const Service = require('../base');
class OfficeService extends Service {
  // 新增
  async add(params) {
    const userBy = await this.userBy();
    const [ result, status ] = await this.ctx.model.SysOffice._add(
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
    return { msg: result.id + '已经存在', success: false };
  }
  // 更新
  async update(params, officeId) {
    const data = await this.ctx.model.SysOffice.update(
      Object.assign(params, await this.updateByOrDate()),
      {
        where: { officeId },
      }
    );
    if (data) {
      return { msg: '更新成功！', success: true };
    }
    return { msg: '更新失败', success: false };
  }
  // 删除
  async delete(params) {
    const status = await this.ctx.model.SysOffice.destroy({ where: params });
    if (status) {
      return { msg: '删除成功！', success: true };
    }
    return { msg: '找不到这条数据', success: false };
  }
  // 详情
  async detail(params) {
    const data = await this.ctx.model.SysOffice.findOne({
      where: params,
    });
    return { msg: '查询成功！', success: true, data };
  }
  // 列表 支持page order
  async list(params) {
    const data = await this.ctx.model.SysOffice._findList(params);
    return { msg: '查询成功！', success: true, data };
  }
  // 树查询
  async tree(params) {
    const data = await this.ctx.model.SysOffice._findTree(params);
    return { msg: '查询成功！', success: true, data };
  }
}
module.exports = OfficeService;
