'use strict';
const crypto = require('crypto');
exports.uuid = () => {
  return this.md5(new Date().getTime());
};
exports.md5 = txt => {
  return crypto.createHash('md5').update(txt).digest('hex');
};
