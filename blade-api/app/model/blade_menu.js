'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeMenu = app.model.define('bladeMenu', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    parentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: '0',
      field: 'parent_id',
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'code',
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'name',
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'alias',
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'path',
    },
    source: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'source',
    },
    sort: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'sort',
    },
    category: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'category',
    },
    action: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0',
      field: 'action',
    },
    isOpen: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '1',
      field: 'is_open',
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'remark',
    },
    isDeleted: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0',
      field: 'is_deleted',
    },
  }, {
    tableName: 'blade_menu',
  });
  return bladeMenu;
};
