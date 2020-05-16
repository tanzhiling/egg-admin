'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeCode = app.model.define('bladeCode', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    datasourceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'datasource_id',
    },
    serviceName: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'service_name',
    },
    codeName: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'code_name',
    },
    tableName: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'table_name',
    },
    tablePrefix: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'table_prefix',
    },
    pkName: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'pk_name',
    },
    packageName: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'package_name',
    },
    baseMode: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'base_mode',
    },
    wrapMode: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'wrap_mode',
    },
    apiPath: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      field: 'api_path',
    },
    webPath: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      field: 'web_path',
    },
    isDeleted: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0',
      field: 'is_deleted',
    },
  }, {
    tableName: 'blade_code',
  });
  return bladeCode;
};
