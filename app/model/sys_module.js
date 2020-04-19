'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define(
    'sys_module',
    {
      moduleCode: {
        type: DataTypes.STRING(64),
        allowNull: false,
        primaryKey: true,
        field: 'module_code',
      },
      moduleName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'module_name',
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      mainClassName: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'main_class_name',
      },
      currentVersion: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'current_version',
      },
      upgradeInfo: {
        type: DataTypes.STRING(300),
        allowNull: true,
        field: 'upgrade_info',
      },
      status: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        defaultValue: '0',
      },
      createBy: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: 'create_by',
      },
      createDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'create_date',
      },
      updateBy: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: 'update_by',
      },
      updateDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'update_date',
      },
      remarks: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
    },
    {
      tableName: 'sys_module',
    }
  );
};
