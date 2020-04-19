'use strict';
const Controller = require('../base');
class ModuleController extends Controller {
  // 新增模块
  async create() {
    const { moduleName, status } = this.ctx.request.body;
    if (!moduleName) {
      this.result({ success: false, msg: 'moduleName不能为空' });
    } else if (!status) {
      this.result({ success: false, msg: 'status不能为空' });
    } else {
      this.result(
        await this.service.sys.module.create({ moduleName, status })
      );
    }
  }
  // 修改
  async update() {
    const {
      moduleCode,
      moduleName,
      description,
      currentVersion,
      upgradeInfo,
      status,
      remarks,
    } = this.ctx.request.body;
    if (moduleCode) {
      this.result(
        await this.service.sys.module.update(
          {
            moduleName,
            description,
            currentVersion,
            upgradeInfo,
            status,
            remarks,
          },
          moduleCode
        )
      );
    } else {
      this.result({ success: false, msg: 'id不能为空' });
    }
  }
  // 删除
  async delete() {
    const { moduleCode } = this.ctx.request.body;
    if (moduleCode) {
      this.result(await this.service.sys.module.delete({ moduleCode }));
    } else {
      this.result({ success: false, msg: 'moduleCode不能为空' });
    }
  }
  // 列表
  async list() {
    const { moduleName, status } = this.ctx.query;
    this.result(await this.service.sys.module.list({ moduleName, status }));
  }
  // 详情
  async detail() {
    const { moduleCode } = this.ctx.query;
    if (moduleCode) {
      this.result(await this.service.sys.module.detail({ moduleCode }));
    } else {
      this.result({ success: false, msg: 'moduleCode不能为空' });
    }
  }
}
module.exports = ModuleController;
