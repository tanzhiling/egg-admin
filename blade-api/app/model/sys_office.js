'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define(
    'sys_office',
    {
      officeId: {
        type: DataTypes.STRING(64),
        allowNull: true,
        field: 'office_code',
      },
      officeCode: {
        type: DataTypes.STRING(64),
        allowNull: false,
        primaryKey: true,
        field: 'office_code',
      },
      parentCode: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: 'parent_code',
      },
      parentCodes: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        field: 'parent_codes',
      },
      treeSort: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        field: 'tree_sort',
        autoIncrement: true,
        defaultValue: 10,
      },
      treeSorts: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        field: 'tree_sorts',
      },
      treeLeaf: {
        type: DataTypes.CHAR(1),
        allowNull: true,
        field: 'tree_leaf',
      },
      treeLevel: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        field: 'tree_level',
      },
      treeNames: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        field: 'tree_names',
      },
      viewCode: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'view_code',
      },
      officeName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'office_name',
      },
      fullName: {
        type: DataTypes.STRING(200),
        allowNull: false,
        field: 'full_name',
      },
      officeType: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        field: 'office_type',
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
      zipCode: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'zip_code',
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
      createBy: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: 'create_by',
      },
      createDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'create_date',
        defaultValue: DataTypes.NOW,
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
        defaultValue: DataTypes.NOW,
      },
      remarks: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      corpCode: {
        type: DataTypes.STRING(64),
        allowNull: false,
        defaultValue: '0',
        field: 'corp_code',
      },
      corpName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'JeeSite',
        field: 'corp_name',
      },
    },
    {
      tableName: 'sys_office',
    }
  );
};
