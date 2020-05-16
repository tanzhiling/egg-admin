'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeRole = app.model.define('bladeRole', {
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
    parentId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: '0',
      field: 'parent_id',
    },
    roleName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'role_name',
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'sort',
    },
    roleAlias: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'role_alias',
    },
    isDeleted: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0',
      field: 'is_deleted',
    },
  }, {
    tableName: 'blade_role',
  });
  bladeRole._add = async function({ id, tenantId, parentId, roleName, sort, roleAlias }) {
    return bladeRole.findOrCreate({
      where: { roleName },
      defaults: {
        id, tenantId, parentId, roleName, sort, roleAlias,
      },
    });
  };
  bladeRole._update = function({ id, tenantId, parentId, roleName, sort, roleAlias }) {
    return bladeRole.update({ tenantId, parentId, roleName, sort, roleAlias }, { where: { id } });
  };
  bladeRole._delete = function({ id }) {
    return bladeRole.destroy({ where: { id } });
  };
  bladeRole._findList = async function({ roleName }) {
    const Op = app.Sequelize.Op;
    return bladeRole.findAll({
      where: { [Op.and]: [ roleName ? { roleName: { [Op.like]: `%${roleName}%` } } : null ] },
    });
  };
  bladeRole._findOne = params => {
    return bladeRole.findOne({ where: params });
  };
  return bladeRole;
};
