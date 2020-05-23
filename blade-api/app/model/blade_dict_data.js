'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeDictData = app.model.define('bladeDictData', {
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
    dictLabel: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'dict_label',
    },
    dictValue: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'dict_value',
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
    tableName: 'blade_dict_data',
  });
  bladeDictData._add = async function({ dictType, dictLabel, dictValue, sort, id, status, remarks }) {
    const Op = app.Sequelize.Op;
    const data = await bladeDictData.findOne({ where: { dictType, [Op.or]: [{ dictLabel }, { dictValue }, { sort }] } });
    if (data) {
      if (data.dictLabel === dictLabel) {
        return { success: false, msg: 'dictLabel值已存在' };
      } else if (data.dictValue === dictValue) {
        return { success: false, msg: 'dictValue值已存在' };
      } else if (data.sort === sort) {
        return { success: false, msg: 'sort值已存在' };
      }
    } else {
      try {
        const result = await bladeDictData.create({ dictLabel, dictType, dictValue, sort, id, status, remarks });
        return { data: result, msg: '新增成功！', success: true };
      } catch (err) {
        let msg = '';
        for (const i in err.errors) {
          msg += err.errors[i].message;
        }
        return { success: false, msg };
      }
    }
  };
  bladeDictData._update = function({ id, dictLabel, dictValue, sort, status, remarks }) {
    return bladeDictData.update({ dictLabel, dictValue, sort, status, remarks }, { where: { id } });
  };
  bladeDictData._delete = function({ id }) {
    return bladeDictData.destroy({ where: { id } });
  };
  bladeDictData._findList = function({ dictType }, attributes) {
    if (attributes) {
      return bladeDictData.findAll({ attributes: [ 'dictLabel', 'dictValue' ], where: { dictType }, order: [[ 'sort', 'ASC' ]] });
    }
    return bladeDictData.findAll({ where: { dictType }, order: [[ 'sort', 'ASC' ]] });
  };
  bladeDictData._findOne = function({ id }) {
    return bladeDictData.findOne({ where: { id } });
  };
  return bladeDictData;
};
