'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeMenuBtn = app.model.define('bladeMenuBtn', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    menuId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'menu_id',
    },
    btnName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'btn_name',
    },
    btnCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'btn_code',
    },
    status: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      field: 'status',
    },
  }, {
    tableName: 'blade_menu_btn',
  });
  bladeMenuBtn._add = function({ id, menuId, btnName, btnCode, status }) {
    return bladeMenuBtn.findOrCreate({
      where: { menuId, btnCode },
      defaults: {
        id, menuId, btnName, btnCode, status,
      },
    });
  };
  bladeMenuBtn._update = function({ btnName, btnCode, status }) {
    return bladeMenuBtn.update({ btnName, btnCode, status }, { where: { id } });
  };
  bladeMenuBtn._delete = function({ id }) {
    return bladeMenuBtn.destroy({ where: { id } });
  };
  bladeMenuBtn._findList = function({ menuId }) {
    return bladeMenuBtn.findAll({ where: { menuId } });
  };
  return bladeMenuBtn;
};
