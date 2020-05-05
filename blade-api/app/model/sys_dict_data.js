'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const SysDictData = app.model.define('sys_dict_data', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'dict_code',
    },
    sort: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: {
          msg: 'sort类型不正确，sort必须是数字型',
        },
      },
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
    isSys: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      field: 'is_sys',
      defaultValue: '0',
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true,
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
    corpCode: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: '0',
      field: 'corp_code',
    },
    corpName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'JeeSite',
      field: 'corp_name',
    },
  }, {
    tableName: 'sys_dict_data',
  });
  SysDictData._add = async function({ dictType, dictLabel, dictValue, sort, id, isSys, description, status, createBy, updateBy, remarks }) {
    const Op = app.Sequelize.Op;
    const data = await SysDictData.findOne({ where: { dictType, [Op.or]: [{ dictLabel }, { dictValue }, { sort }] } });
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
        const result = await SysDictData.create({ dictLabel, dictType, dictValue, sort, id, isSys, description, status, createBy, updateBy, remarks });
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
  SysDictData._findList = async function({ dictType, attributes }) {
    if (attributes) {
      return SysDictData.findAll({ attributes: [ 'dictLabel', 'dictValue', 'id' ], where: { dictType }, order: [[ 'sort', 'ASC' ]] });
    }
    return SysDictData.findAll({ where: { dictType }, order: [[ 'sort', 'ASC' ]] });
  };
  SysDictData._findOne = function({ id }) {
    return SysDictData.findOne({ where: { id } });
  };
  SysDictData._update = function({ id, dictLabel, dictValue, sort, isSys, description, status, updateBy, remarks }) {
    return SysDictData.update({ dictLabel, dictValue, sort, isSys, description, status, updateBy, remarks }, { where: { id } });
  };
  SysDictData._delete = function({ id }) {
    return SysDictData.destroy({ where: { id } });
  };
  return SysDictData;
};
