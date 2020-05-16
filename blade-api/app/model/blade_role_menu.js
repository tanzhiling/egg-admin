'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeRoleMenu = app.model.define('bladeRoleMenu', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    menuId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'menu_id',
    },
    roleId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'role_id',
    },
  }, {
    tableName: 'blade_role_menu',
  });
  return bladeRoleMenu;
};
