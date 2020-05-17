'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeDictType = app.model.define('bladeDictType', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    sort: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'sort',
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
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      field: 'status',
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'create_time',
      defaultValue: DataTypes.NOW,
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'update_time',
      defaultValue: DataTypes.NOW,
    },
    remarks: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'remarks',
    },
  }, {
    tableName: 'blade_dict_type',
  });
  bladeDictType._add = function({ dictType, dictName, id, remarks, sort, status }) {
    return bladeDictType.findOrCreate({ where: { dictType }, defaults: { dictName, id, remarks, sort, status } });
  };
  bladeDictType._update = function({ dictType, dictName, id, remarks, sort, status }) {
    return bladeDictType.update({ dictType, dictName, remarks, sort, status }, { where: { id } });
  };
  bladeDictType._delete = function({ id }) {
    return bladeDictType.destroy({ where: { id } });
  };
  bladeDictType._findList = async function({ dictName, dictType, size = 10, current = 1 }) {
    const Op = app.Sequelize.Op;
    const { rows: list, count: total } = await bladeDictType.findAndCountAll({
      where: {
        [Op.and]: [
          dictName ? { dictName: { [Op.like]: `%${dictName}%` } } : null,
          dictType ? { dictType: { [Op.like]: `%${dictType}%` } } : null,
        ],
      },
      limit: size,
      offset: (current - 1) * size,
      order: [[ 'sort', 'ASC' ]],
    });
    return { list, size, current, total };
  };
  bladeDictType._findOne = function({ id }) {
    return bladeDictType.findOne({ where: { id } });
  };
  return bladeDictType;
};
