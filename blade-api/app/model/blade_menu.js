'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeMenu = app.model.define('bladeMenu', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    parentId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: '0',
      field: 'parent_id',
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'code',
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'name',
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'alias',
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'path',
    },
    source: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'source',
    },
    sort: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'sort',
    },
    category: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'category',
    },
    action: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0',
      field: 'action',
    },
    isOpen: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '1',
      field: 'is_open',
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'remark',
    },
    isDeleted: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0',
      field: 'is_deleted',
    },
  }, {
    tableName: 'blade_menu',
  });
  bladeMenu._add = async function({ id, parentId, code, name, alias, path, source, sort, category, action, isOpen, remark }) {
    return bladeMenu.findOrCreate({
      where: { code },
      defaults: {
        id, parentId, code, name, alias, path, source, sort, category, action, isOpen, remark,
      },
    });
  };
  bladeMenu._update = function({ id, parentId, code, name, alias, path, source, sort, category, action, isOpen, remark }) {
    return bladeMenu.update({ parentId, code, name, alias, path, source, sort, category, action, isOpen, remark }, { where: { id } });
  };
  bladeMenu._delete = function({ id }) {
    return bladeMenu.destroy({ where: { id } });
  };
  bladeMenu._findList = async function({ name }) {
    const Op = app.Sequelize.Op;
    return bladeMenu.findAll({
      where: { [Op.and]: [ name ? { name: { [Op.like]: `%${name}%` } } : null ] },
    });
  };
  bladeMenu._findOne = params => {
    return bladeMenu.findOne({ where: params });
  };
  return bladeMenu;
};
