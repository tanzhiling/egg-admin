'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeScopeApi = app.model.define('bladeScopeApi', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    menuId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'menu_id',
    },
    resourceCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'resource_code',
    },
    scopeName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'scope_name',
    },
    scopePath: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'scope_path',
    },
    scopeType: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'scope_type',
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
      field: 'is_deleted',
    },
  }, {
    tableName: 'blade_scope_api',
  });
  return bladeScopeApi;
};
