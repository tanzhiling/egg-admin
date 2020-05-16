'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeRoleScope = app.model.define('bladeRoleScope', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    scopeCategory: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'scope_category',
    },
    scopeId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'scope_id',
    },
    roleId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'role_id',
    },
  }, {
    tableName: 'blade_role_scope',
  });
  return bladeRoleScope;
};
