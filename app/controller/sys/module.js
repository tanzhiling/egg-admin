'use strict';
const Controller = require('../base');
class ModuleController extends Controller {
  // 新增模块
  async add() {
    const { moduleName, status, createBy } = this.ctx.request.body;
    const currentDate = await this.currentDate();
    if (!moduleName) {
      this.result({ success: false, msg: 'moduleName不能为空' });
    } else if (!status) {
      this.result({ success: false, msg: 'status不能为空' });
    } else if (!createBy) {
      this.result({ success: false, msg: 'createBy不能为空' });
    } else {
      this.result(await this.service.sys.module.create({
        module_name: moduleName,
        status,
        create_by: createBy,
        update_by: createBy,
        create_date: currentDate,
        update_date: currentDate,
      }));
    }
  }
}
module.exports = ModuleController;
