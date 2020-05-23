'use strict';
const crypto = require('crypto');
exports.uuid = () => {
  const nowTime = new Date().getTime();
  return this.md5(nowTime.toString());
};
exports.md5 = txt => {
  return crypto.createHash('md5').update(txt).digest('hex');
};
exports.renderTree = (data, parentId) => {
  const target = [],
    loser = [];
  data.forEach(item => {
    if (item.parentId === parentId) {
      target.push(item);
    } else {
      loser.push(item);
    }
  });
  for (const i in target) {
    target[i].children = this.renderTree(loser, target[i].id);
  }
  return target;
};
