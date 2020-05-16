'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladePost = app.model.define('bladePost', {
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
    category: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'category',
    },
    postCode: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'post_code',
    },
    postName: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'post_name',
    },
    sort: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'sort',
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'remark',
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
    tableName: 'blade_post',
  });
  bladePost._add = async function({ id, tenantId, category, postCode, postName, sort, remark, createUser, createDept, status }) {
    return bladePost.findOrCreate({
      where: { postCode },
      defaults: {
        id, tenantId, category, postCode, postName, sort, remark, createUser, createDept, status,
      },
    });
  };
  bladePost._update = function({ id, tenantId, category, postName, sort, remark, updateUser, status }) {
    return bladePost.update({ tenantId, category, postName, sort, remark, updateUser, status }, { where: { id } });
  };
  bladePost._delete = function({ id }) {
    return bladePost.destroy({ where: { id } });
  };
  bladePost._findList = async function({ postName }) {
    const Op = app.Sequelize.Op;
    return bladePost.findAll({
      where: { [Op.and]: [ postName ? { postName: { [Op.like]: `%${postName}%` } } : null ] },
    });
  };
  bladePost._findOne = params => {
    return bladePost.findOne({ where: params });
  };
  return bladePost;
};
