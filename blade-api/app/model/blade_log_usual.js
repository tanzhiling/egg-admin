'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeLogUsual = app.model.define('bladeLogUsual', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    tenantId: {
      type: DataTypes.STRING(12),
      allowNull: true,
      defaultValue: '000000',
      field: 'tenant_id',
    },
    serviceId: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'service_id',
    },
    serverHost: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'server_host',
    },
    serverIp: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'server_ip',
    },
    env: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'env',
    },
    logLevel: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'log_level',
    },
    logId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'log_id',
    },
    logData: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'log_data',
    },
    method: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'method',
    },
    requestUri: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'request_uri',
    },
    remoteIp: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'remote_ip',
    },
    methodClass: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'method_class',
    },
    methodName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'method_name',
    },
    userAgent: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'user_agent',
    },
    params: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'params',
    },
    createBy: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'create_by',
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
      field: 'create_time',
    },
  }, {
    tableName: 'blade_log_usual',
  });
  return bladeLogUsual;
};
