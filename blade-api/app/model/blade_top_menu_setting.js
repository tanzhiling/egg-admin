'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeTopMenuSetting = app.model.define('bladeTopMenuSetting', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    topMenuId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'top_menu_id',
    },
    menuId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'menu_id',
    },
  }, {
    tableName: 'blade_top_menu_setting',
  });
  return bladeTopMenuSetting;
};
