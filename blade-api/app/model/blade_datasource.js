'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeDatasource = app.model.define('bladeDatasource', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'name',
    },
    driverClass: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'driver_class',
    },
    url: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'url',
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'username',
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'password',
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'remark',
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
    tableName: 'blade_datasource',
  });
  return bladeDatasource;
};
