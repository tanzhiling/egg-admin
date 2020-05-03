'use strict';
const Service = require('../base');
class ModuleService extends Service {
  // 新增
  async add(params) {
    const [ result, status ] = await this.ctx.model.SysModule.findOrCreate({
      where: { moduleName: params.moduleName },
      defaults: Object.assign(
        params,
        await this.createByOrDate(),
        await this.updateByOrDate(),
        {
          moduleCode: await this.createUuid(),
        }
      ),
    });
    if (status) {
      return { msg: '新增成功！', success: status };
    }
    return { msg: result.moduleName + '已经存在', success: false };
  }
  // 更新
  async update(params, moduleCode) {
    const data = await this.ctx.model.SysModule.update(
      Object.assign(params, await this.updateByOrDate()),
      {
        where: { moduleCode },
      }
    );
    if (data) {
      return { msg: '更新成功！', success: true };
    }
    return { msg: '更新失败', success: false };
  }
  // 删除
  async delete(params) {
    const status = await this.ctx.model.SysModule.destroy({ where: params });
    if (status) {
      return { msg: '删除成功！', success: true };
    }
    return { msg: '找不到这条数据', success: false };
  }
  // 列表 支持page order
  async list(params) {
    const Op = this.app.Sequelize.Op;
    const { moduleName, status, size = 10, current = 1 } = params;
    const {
      rows: data,
      count: total,
    } = await this.ctx.model.SysModule.findAndCountAll({
      where: {
        [Op.and]: [
          moduleName ? { moduleName } : null,
          status ? { status } : null,
        ],
      },
      limit: size,
      offset: (current - 1) * size,
    });
    return { msg: '查询成功！', success: true, data, size, current, total };
  }
  // 详情
  async detail(params) {
    const data = await this.ctx.model.SysModule.findOne({
      where: params,
    });
    return { msg: '查询成功！', success: true, data };
  }
}
module.exports = ModuleService;
