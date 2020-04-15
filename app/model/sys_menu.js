'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define('sys_menu', {
    menu_code: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
    },
    parent_code: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    parent_codes: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    tree_sort: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    tree_sorts: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    tree_leaf: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    tree_level: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    tree_names: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    menu_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    menu_type: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    menu_href: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    menu_target: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    menu_icon: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    menu_color: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    menu_title: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    permission: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    is_show: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    sys_code: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    module_codes: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: '0',
    },
    create_by: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    update_by: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    remarks: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
  }, {
    tableName: 'sys_menu',
  });
};
