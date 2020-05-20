'use strict';
const Controller = require('egg').Controller;
class UploadController extends Controller {
  async avatar() {
    const files = this.ctx.request.files[0];
    this.ctx.result(await this.service.bladeBase.upload.upload(files, 'avatar'));
  }
}
module.exports = UploadController;
