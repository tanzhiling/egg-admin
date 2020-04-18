'use strict';
const Controller = require('../base');
class ModuleController extends Controller {
  // 新增模块
  async create() {
    const { module_name, status, create_by } = this.ctx.request.body;
    const currentDate = await this.currentDate();
    if (!module_name) {
      this.result({ success: false, msg: 'module_name不能为空' });
    } else if (!status) {
      this.result({ success: false, msg: 'status不能为空' });
    } else if (!create_by) {
      this.result({ success: false, msg: 'create_by不能为空' });
    } else {
      this.result(
        await this.service.sys.module.create({
          module_name,
          status,
          create_by,
          update_by: create_by,
          create_date: currentDate,
          update_date: currentDate,
        })
      );
    }
  }
  // 修改
  async update() {
    const update_date = await this.currentDate();
    const {
      id,
      module_name,
      description,
      current_version,
      upgrade_info,
      status,
      update_by,
      remarks,
    } = this.ctx.request.body;
    if (id) {
      this.result(
        await this.service.sys.module.update(
          {
            module_name,
            description,
            current_version,
            upgrade_info,
            status,
            update_by,
            update_date,
            remarks,
          },
          id
        )
      );
    } else {
      this.result({ success: false, msg: 'id不能为空' });
    }
  }
  // 删除
  async delete() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.result(await this.service.sys.module.delete({ module_code: id }));
    } else {
      this.result({ success: false, msg: 'id不能为空' });
    }
  }
  // 列表
  async list() {
    const { module_name, status } = this.ctx.query;
    this.result(await this.service.sys.module.list({ module_name, status }));
  }
  // 详情
  async detail() {
    const { id } = this.ctx.query;
    if (id) {
      this.result(await this.service.sys.module.detail({ module_code: id }));
    } else {
      this.result({ success: false, msg: 'id不能为空' });
    }
  }
}
module.exports = ModuleController;
