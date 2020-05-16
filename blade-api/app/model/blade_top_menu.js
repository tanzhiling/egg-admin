'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeTopMenu = app.model.define('bladeTopMenu', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    tenantId: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'tenant_id',
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
    createUser: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'create_user',
    },
    createDept: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'create_dept',
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'create_time',
      defaultValue: DataTypes.NOW,
    },
    updateUser: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'update_user',
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'update_time',
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'status',
    },
    isDeleted: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'is_deleted',
    },
  }, {
    tableName: 'blade_top_menu',
  });
  return bladeTopMenu;
};
