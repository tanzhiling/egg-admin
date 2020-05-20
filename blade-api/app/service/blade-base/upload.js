'use strict';
const fs = require('fs');
const path = require('path');
const Service = require('egg').Service;
class UploadService extends Service {
  async upload(files, dir) {
    try {
      fs.statSync(path.join(this.config.baseDir, '/app/public/upload', dir));
    } catch (e) {
      fs.mkdirSync(path.join(this.config.baseDir, '/app/public/upload', dir));
    }
    const filename = new Date().getTime() + path.extname(files.filename);
    const target = path.join(this.config.baseDir, '/app/public/upload/', dir, filename);
    const file = fs.readFileSync(files.filepath);
    try {
      fs.writeFileSync(target, file);
      return {
        success: true,
        msg: '上传成功！',
        data: '/upload/' + dir + '/' + filename,
      };
    } catch (e) {
      return {
        success: false,
        ...e,
      };
    }
  }
}
module.exports = UploadService;
