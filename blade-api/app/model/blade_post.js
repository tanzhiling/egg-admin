'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladePost = app.model.define('bladePost', {
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
    tableName: 'blade_post',
  });
  return bladePost;
};
