'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeClient = app.model.define('bladeClient', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    clientId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      field: 'client_id',
    },
    clientSecret: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'client_secret',
    },
    resourceIds: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'resource_ids',
    },
    scope: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'scope',
    },
    authorizedGrantTypes: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'authorized_grant_types',
    },
    webServerRedirectUri: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'web_server_redirect_uri',
    },
    authorities: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'authorities',
    },
    accessTokenValidity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'access_token_validity',
    },
    refreshTokenValidity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'refresh_token_validity',
    },
    additionalInformation: {
      type: DataTypes.STRING(4096),
      allowNull: true,
      field: 'additional_information',
    },
    autoapprove: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'autoapprove',
    },
    createUser: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'create_user',
    },
    createDept: {
      type: DataTypes.STRING(64),
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
      type: DataTypes.STRING(64),
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
      type: DataTypes.CHAR(1),
      allowNull: false,
      field: 'status',
    },
    isDeleted: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      field: 'is_deleted',
    },
  }, {
    tableName: 'blade_client',
  });
  return bladeClient;
};
