'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeDept = app.model.define('bladeDept', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    tenantId: {
      type: DataTypes.STRING(12),
      allowNull: true,
      defaultValue: '000000',
      field: 'tenant_id',
    },
    parentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: '0',
      field: 'parent_id',
    },
    ancestors: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      field: 'ancestors',
    },
    deptCategory: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'dept_category',
    },
    deptName: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'dept_name',
    },
    fullName: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'full_name',
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'sort',
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
    tableName: 'blade_dept',
  });
  return bladeDept;
};
