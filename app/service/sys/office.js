'use strict';
const Service = require('../base');
class OfficeService extends Service {
  // 新增
  async add(params) {
    const { officeCode, officeName, officeType, fullName, parentCode } = params;
    let parentData,
      defaults;
    // 查找父级
    if (parentCode) {
      parentData = await this.ctx.model.SysOffice.findOne({
        where: { officeCode: parentCode },
      });
    }
    if (parentData && parentData.officeCode) {
      defaults = {
        officeCode,
        parentCode: parentData.officeCode,
        parentCodes: parentData.parentCodes + ',' + officeCode,
      };
    } else {
      defaults = {
        officeCode,
        parentCode: officeCode,
        parentCodes: officeCode,
      };
    }
    const [ result, status ] = await this.ctx.model.SysOffice.findOrCreate({
      where: { officeCode: params.officeCode },
      defaults: Object.assign(
        defaults,
        await this.updateByOrDate(),
        await this.createByOrDate(),
        {
          viewCode: officeCode,
          officeName,
          officeType,
          fullName,
        }
      ),
    });
    if (status) {
      return { msg: '新增成功！', success: status };
    }
    return { msg: result.officeCode + '已经存在', success: false };
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
    const { size = 10, current = 1 } = params;
    const {
      rows: data,
      count: total,
    } = await this.ctx.model.SysOffice.findAndCountAll({
      limit: size,
      offset: (current - 1) * size,
    });
    return { msg: '查询成功！', success: true, data, size, current, total };
  }
}
module.exports = OfficeService;
