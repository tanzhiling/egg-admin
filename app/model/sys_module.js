'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define('sys_module', {
    module_code: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
    },
    module_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    main_class_name: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    current_version: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    upgrade_info: {
      type: DataTypes.STRING(300),
      allowNull: true,
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
    tableName: 'sys_module',
  });
};
