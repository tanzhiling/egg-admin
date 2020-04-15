'use strict';
const Service = require('../base');
class ModuleService extends Service {
  // 新增
  async create(post) {
    const module_code = await this.createUuid();
    const [ result, status ] = await this.ctx.model.SysModule.findOrCreate({
      where: { module_name: post.module_name },
      defaults: Object.assign(post, { module_code }),
    });
    if (status) {
      return { msg: '新增成功！', success: status };
    }
    return { msg: result.module_name + '已经存在', success: false };
  }
  // 更新
  async update(post) {
    console.log(post);
  }
}
module.exports = ModuleService;
