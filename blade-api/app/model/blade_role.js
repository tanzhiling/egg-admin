'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeRole = app.model.define('bladeRole', {
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
    parentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: '0',
      field: 'parent_id',
    },
    roleName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'role_name',
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'sort',
    },
    roleAlias: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'role_alias',
    },
    isDeleted: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0',
      field: 'is_deleted',
    },
  }, {
    tableName: 'blade_role',
  });
  return bladeRole;
};
