/* jshint indent: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeUser = app.model.define('bladeUser', {
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
    code: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'code',
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'account',
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'password',
    },
    nickname: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'name',
    },
    realName: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'real_name',
    },
    avatar: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'avatar',
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'email',
    },
    phone: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'phone',
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'birthday',
    },
    sex: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      field: 'sex',
    },
    roleId: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'role_id',
    },
    deptId: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'dept_id',
    },
    postId: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'post_id',
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
      defaultValue: '0',
    },
    isDeleted: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0',
      field: 'is_deleted',
    },
  }, {
    tableName: 'blade_user',
  });
  bladeUser._add = function({ id, tenantId, code, username, nickname, password, realName, avatar, email, phone, birthday, sex, roleId, deptId, postId, createUser, createDept, status }) {
    return bladeUser.findOrCreate({
      where: { username },
      defaults: {
        id, tenantId, code, username, nickname, password, realName, avatar, email, phone, birthday, sex, roleId, deptId, postId, createUser, createDept, status,
      },
    });
  };
  bladeUser._update = function({ id, tenantId, code, nickname, password, realName, avatar, email, phone, birthday, sex, roleId, deptId, postId, status, updateUser }) {
    return bladeUser.update({ tenantId, code, nickname, password, realName, avatar, email, phone, birthday, sex, roleId, deptId, postId, status, updateUser }, { where: { id } });
  };
  bladeUser._delete = function({ id }) {
    return bladeUser.destroy({ where: { id } });
  };
  bladeUser._findList = async function({ username, size = 10, current = 1 }) {
    const Op = app.Sequelize.Op;
    const { rows: list, count: total } = await bladeUser.findAndCountAll({
      attributes: { exclude: [ 'password' ] },
      include: [
        { model: app.model.BladeDept, as: 'dept', attributes: [ 'deptName', [ 'id', 'deptId' ]] },
        { model: app.model.BladeRole, as: 'role', attributes: [ 'roleName', [ 'id', 'roleId' ]] },
      ],
      where: {
        [Op.and]: [
          username ? { username: { [Op.like]: `%${username}%` } } : null,
        ],
      },
      limit: size,
      offset: (current - 1) * size,
    });
    return { list, size, current, total };
  };
  bladeUser._findOne = (params, raw = false) => {
    return bladeUser.findOne({
      attributes: { exclude: [ 'password' ] },
      include: [{ model: app.model.BladeDept, as: 'dept', attributes: [ 'deptName', [ 'id', 'deptId' ]] }],
      where: params,
      raw,
    });
  };
  bladeUser.associate = function() {
    bladeUser.belongsTo(app.model.BladeDept, { foreignKey: 'deptId', targetKey: 'id', as: 'dept' });
    bladeUser.belongsTo(app.model.BladeRole, { foreignKey: 'roleId', targetKey: 'id', as: 'role' });
  };
  return bladeUser;
};
