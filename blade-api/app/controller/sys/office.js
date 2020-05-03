'use strict';
const Controller = require('../base');
class OfficeController extends Controller {
  // 新增模块
  async add() {
    const {
      officeCode,
      officeName,
      officeType,
      fullName,
      parentCode,
    } = this.ctx.request.body;
    if (!officeCode) {
      this.result({ success: false, msg: 'officeCode不能为空' });
    } else if (!officeName) {
      this.result({ success: false, msg: 'officeName不能为空' });
    } else if (!officeType) {
      this.result({ success: false, msg: 'officeType不能为空' });
    } else if (!fullName) {
      this.result({ success: false, msg: 'fullName不能为空' });
    } else {
      this.result(
        await this.service.sys.office.add({
          officeCode,
          officeName,
          officeType,
          fullName,
          parentCode,
        })
      );
    }
  }
  // 修改
  async update() {
    const { officeId, officeName, fullName, remarks } = this.ctx.request.body;
    if (officeId) {
      this.result(
        await this.service.sys.office.update(
          {
            officeName,
            fullName,
            remarks,
          },
          officeId
        )
      );
    } else {
      this.result({ success: false, msg: 'officeId不能为空' });
    }
  }
  // 删除
  async delete() {
    const { officeId } = this.ctx.request.body;
    if (officeId) {
      this.result(await this.service.sys.office.delete({ officeId }));
    } else {
      this.result({ success: false, msg: 'officeId不能为空' });
    }
  }
  // 详情
  async detail() {
    const { officeId } = this.ctx.query;
    if (officeId) {
      this.result(await this.service.sys.office.detail({ officeId }));
    } else {
      this.result({ success: false, msg: 'officeId不能为空' });
    }
  }
  // 列表
  async list(params) {
    this.result(await this.service.sys.office.list(params));
  }
}
module.exports = OfficeController;
