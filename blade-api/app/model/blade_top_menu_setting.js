'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeTopMenuSetting = app.model.define('bladeTopMenuSetting', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    topMenuId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'top_menu_id',
    },
    menuId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'menu_id',
    },
  }, {
    tableName: 'blade_top_menu_setting',
  });
  return bladeTopMenuSetting;
};
