'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeOss = app.model.define('bladeOss', {
    id: {
      type: DataTypes.BIGINT,
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
    category: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'category',
    },
    ossCode: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'oss_code',
    },
    endpoint: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'endpoint',
    },
    accessKey: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'access_key',
    },
    secretKey: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'secret_key',
    },
    bucketName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'bucket_name',
    },
    appId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'app_id',
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'region',
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'remark',
    },
    createUser: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'create_user',
    },
    createDept: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'create_dept',
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'create_time',
      defaultValue: DataTypes.NOW,
    },
    updateUser: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'update_user',
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'update_time',
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'status',
    },
    isDeleted: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0',
      field: 'is_deleted',
    },
  }, {
    tableName: 'blade_oss',
  });
  return bladeOss;
};
