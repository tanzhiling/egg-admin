'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeLogApi = app.model.define('bladeLogApi', {
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
    type: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: '1',
      field: 'type',
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      field: 'title',
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
    userAgent: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'user_agent',
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
    params: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'params',
    },
    time: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'time',
    },
    createBy: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'create_by',
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'create_time',
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'blade_log_api',
  });
  return bladeLogApi;
};
