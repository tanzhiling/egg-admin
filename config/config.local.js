'use strict';
// 本地配置
module.exports = {
  sequelize: {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'admin',
    username: 'root',
    password: '123456',
    timezone: '+08:00',
    define: {
      timestamps: false,
    },
  },
};
