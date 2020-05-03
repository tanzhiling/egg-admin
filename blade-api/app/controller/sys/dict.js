'use strict';
const Controller = require('../base');
class DictController extends Controller {
  async typeAdd() {
    const { dictName, dictType } = this.ctx.request.body;
    if (!dictName) {
      this.result({ success: false, msg: 'dictName不能为空' });
    } else if (!dictType) {
      this.result({ success: false, msg: 'dictType不能为空' });
    } else {
      this.result(
        await this.service.sys.dict.typeAdd(this.ctx.request.body)
      );
    }
  }
  async typeList() {
    this.result(await this.service.sys.dict.typeList(this.ctx.query));
  }
  async typeDetail() {
    this.result(await this.service.sys.dict.typeDetail(this.ctx.query));
  }
  async typeUpdate() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.result(await this.service.sys.dict.typeUpdate(this.ctx.request.body));
    } else {
      this.result({ success: false, msg: 'id不能为空' });
    }
  }
  async typeDelete() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.result(await this.service.sys.dict.typeDelete({ id }));
    } else {
      this.result({ success: false, msg: 'id不能为空' });
    }
  }
  async dataAdd() {
    const { dictType, dictLabel, dictValue, sort } = this.ctx.request.body;
    if (!dictType) {
      this.result({ success: false, msg: 'dictType不能为空' });
    } else if (!dictLabel) {
      this.result({ success: false, msg: 'dictLabel不能为空' });
    } else if (!dictValue) {
      this.result({ success: false, msg: 'dictValue不能为空' });
    } else if (!sort) {
      this.result({ success: false, msg: 'sort不能为空' });
    } else {
      this.result(
        await this.service.sys.dict.dataAdd(this.ctx.request.body)
      );
    }
  }
  async dataList() {
    this.result(await this.service.sys.dict.dataList(this.ctx.query));
  }
}
module.exports = DictController;
