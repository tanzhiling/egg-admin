'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const SysDictType = app.model.define(
    'sys_dict_type',
    {
      id: {
        type: DataTypes.STRING(64),
        allowNull: false,
        primaryKey: true,
      },
      dictName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'dict_name',
      },
      dictType: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'dict_type',
      },
      isSys: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        field: 'is_sys',
        defaultValue: '0',
      },
      status: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        defaultValue: '0',
      },
      createBy: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: 'create_by',
      },
      createDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'create_date',
        defaultValue: DataTypes.NOW,
      },
      updateBy: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: 'update_by',
      },
      updateDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'update_date',
        defaultValue: DataTypes.NOW,
      },
      remarks: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
    },
    {
      tableName: 'sys_dict_type',
    }
  );
  SysDictType._add = function({ dictType, dictName, id, isSys, remarks, createBy, updateBy }) {
    return SysDictType.findOrCreate({
      where: { dictType },
      defaults: {
        dictName, id, isSys, remarks, createBy, updateBy,
      },
    });
  };
  SysDictType._findList = async function({ dictName, dictType, size = 10, current = 1 }) {
    const Op = app.Sequelize.Op;
    const { rows: list, count: total } = await SysDictType.findAndCountAll({
      where: {
        [Op.and]: [
          dictName ? { dictName: { [Op.like]: `%${dictName}%` } } : null,
          dictType ? { dictType: { [Op.like]: `%${dictType}%` } } : null,
        ],
      },
      limit: size,
      offset: (current - 1) * size,
    });
    return { list, size, current, total };
  };
  SysDictType._findOne = function({ id }) {
    return SysDictType.findOne({
      where: { id },
    });
  };
  SysDictType._update = function({ dictType, dictName, id, isSys, remarks, updateBy }) {
    return SysDictType.update({ dictType, dictName, isSys, remarks, updateBy }, { where: { id } });
  };
  SysDictType._delete = function({ id }) {
    return SysDictType.destroy({ where: { id } });
  };
  return SysDictType;
};
