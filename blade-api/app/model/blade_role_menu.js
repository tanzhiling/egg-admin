'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeRoleMenu = app.model.define('bladeRoleMenu', {
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
    roleId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'role_id',
    },
  }, {
    tableName: 'blade_role_menu',
  });
  return bladeRoleMenu;
};
