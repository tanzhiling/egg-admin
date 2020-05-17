'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeSms = app.model.define('bladeSms', {
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
    category: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'category',
    },
    smsCode: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'sms_code',
    },
    templateId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'template_id',
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
    regionId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'region_id',
    },
    signName: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'sign_name',
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'remark',
    },
    createUser: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'create_user',
    },
    createDept: {
      type: DataTypes.STRING(64),
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
      type: DataTypes.STRING(64),
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
      type: DataTypes.CHAR(1),
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
    tableName: 'blade_sms',
  });
  return bladeSms;
};
