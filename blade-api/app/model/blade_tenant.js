'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeTenant = app.model.define('bladeTenant', {
    id: {
      type: DataTypes.STRING(64),
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
    tenantName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'tenant_name',
    },
    domain: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'domain',
    },
    backgroundUrl: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'background_url',
    },
    linkman: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'linkman',
    },
    contactNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'contact_number',
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'address',
    },
    accountNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '-1',
      field: 'account_number',
    },
    expireTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'expire_time',
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
      allowNull: true,
      field: 'status',
    },
    isDeleted: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0',
      field: 'is_deleted',
    },
  }, {
    tableName: 'blade_tenant',
  });
  bladeTenant._add = async function({ id, tenantId, tenantName, domain, backgroundUrl, linkman, contactNumber, address, accountNumber, expireTime, createUser, status }) {
    return bladeTenant.findOrCreate({
      where: { tenantId },
      defaults: {
        id, tenantId, tenantName, domain, backgroundUrl, linkman, contactNumber, address, accountNumber, expireTime, createUser, status,
      },
    });
  };
  bladeTenant._update = function({ id, tenantName, domain, backgroundUrl, linkman, contactNumber, address, accountNumber, expireTime, updateUser, status }) {
    return bladeTenant.update({ tenantName, domain, backgroundUrl, linkman, contactNumber, address, accountNumber, expireTime, updateUser, status }, { where: { id } });
  };
  bladeTenant._delete = function({ id }) {
    return bladeTenant.destroy({ where: { id } });
  };
  bladeTenant._findList = async function({ tenantName }) {
    const Op = app.Sequelize.Op;
    return bladeTenant.findAll({
      where: { [Op.and]: [ tenantName ? { tenantName: { [Op.like]: `%${tenantName}%` } } : null ] },
    });
  };
  bladeTenant._findDict = function() {
    return bladeTenant.findAll({ attributes: [ 'tenantId', 'tenantName' ], where: { status: '1' } });
  };
  bladeTenant._findOne = params => {
    return bladeTenant.findOne({ where: params });
  };
  return bladeTenant;
};
