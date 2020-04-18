'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define(
    'sys_office',
    {
      office_code: {
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
      view_code: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      office_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      full_name: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      office_type: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      leader: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      zip_code: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      email: {
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
      corp_code: {
        type: DataTypes.STRING(64),
        allowNull: false,
        defaultValue: '0',
      },
      corp_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'JeeSite',
      },
    },
    {
      tableName: 'sys_office',
    }
  );
};
