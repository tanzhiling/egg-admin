'use strict';
const crypto = require('crypto');
exports.uuid = () => {
  const nowTime = new Date().getTime();
  return this.md5(nowTime.toString());
};
exports.md5 = txt => {
  return crypto.createHash('md5').update(txt).digest('hex');
};
