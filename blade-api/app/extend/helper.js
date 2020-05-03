'use strict';
const dayjs = require('dayjs');

exports.formatDate = (time, type = 'YYYY-MM-DD HH-mm-ss') => {
  return dayjs(time).format(type);
};
