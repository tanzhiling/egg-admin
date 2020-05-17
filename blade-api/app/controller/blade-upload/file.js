'use strict';
const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
class FileController extends Controller {
  async upload() {
    const files = this.ctx.request.files[0];
    // 文件存放目录
    const filename = new Date().getTime() + path.extname(files.filename);
    const target = path.join(this.config.baseDir, '/app/public/upload', filename);
    const file = fs.readFileSync(files.filepath);
    try {
      fs.writeFileSync(target, file);
      this.ctx.body = {
        success: true,
        msg: '上传成功！',
        data: 'upload/' + filename,
      };
    } catch (e) {
      this.ctx.body = {
        success: false,
        msg: JSON.stringify(e),
      };
    }
  }
}
module.exports = FileController;
