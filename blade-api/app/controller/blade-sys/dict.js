'use strict';
const Controller = require('egg').Controller;
class DictController extends Controller {
  async typeAdd() {
    const { dictName, dictType } = this.ctx.request.body;
    if (!dictName) {
      this.ctx.result({ success: false, msg: 'dictName不能为空' });
    } else if (!dictType) {
      this.ctx.result({ success: false, msg: 'dictType不能为空' });
    } else {
      this.ctx.result(
        await this.service.bladeSys.dict.typeAdd(this.ctx.request.body)
      );
    }
  }
  async typeUpdate() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.ctx.result(await this.service.bladeSys.dict.typeUpdate(this.ctx.request.body));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
  async typeDelete() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.ctx.result(await this.service.bladeSys.dict.typeDelete({ id }));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
  async typeList() {
    this.ctx.result(await this.service.bladeSys.dict.typeList(this.ctx.query));
  }
  async typeDetail() {
    this.ctx.result(await this.service.bladeSys.dict.typeDetail(this.ctx.query));
  }
  async dataAdd() {
    const { dictType, dictLabel, dictValue, sort } = this.ctx.request.body;
    if (!dictType) {
      this.ctx.result({ success: false, msg: 'dictType不能为空' });
    } else if (!dictLabel) {
      this.ctx.result({ success: false, msg: 'dictLabel不能为空' });
    } else if (!dictValue) {
      this.ctx.result({ success: false, msg: 'dictValue不能为空' });
    } else if (!sort) {
      this.ctx.result({ success: false, msg: 'sort不能为空' });
    } else {
      this.ctx.result(
        await this.service.bladeSys.dict.dataAdd(this.ctx.request.body)
      );
    }
  }
  async dataDetail() {
    this.ctx.result(await this.service.bladeSys.dict.dataDetail(this.ctx.query));
  }
  async dataList() {
    this.ctx.result(await this.service.bladeSys.dict.dataList(this.ctx.query));
  }
  async dataUpdate() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.ctx.result(await this.service.bladeSys.dict.dataUpdate(this.ctx.request.body));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
  async dataDelete() {
    const { id } = this.ctx.request.body;
    if (id) {
      this.ctx.result(await this.service.bladeSys.dict.dataDelete({ id }));
    } else {
      this.ctx.result({ success: false, msg: 'id不能为空' });
    }
  }
  async findList() {
    this.ctx.result(await this.service.bladeSys.dict.findList(this.ctx.query));
  }
}
module.exports = DictController;
