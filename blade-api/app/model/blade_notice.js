'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeNotice = app.model.define('bladeNotice', {
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
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'title',
    },
    category: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'category',
    },
    releaseTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'release_time',
    },
    content: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      field: 'content',
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
      field: 'is_deleted',
    },
  }, {
    tableName: 'blade_notice',
  });
  return bladeNotice;
};
