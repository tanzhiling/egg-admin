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
    hasChildren: {
      type: DataTypes.VIRTUAL,
      get() {
        return !!(this.getDataValue('count') > 0);
      },
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
  bladeMenu._add = function({ id, parentId = '0', code, name, alias, path, source, sort, category, action, isOpen, remark }) {
    return bladeMenu.findOrCreate({
      where: { code },
      defaults: {
        id, parentId, code, name, alias, path, source, sort, category, action, isOpen, remark,
      },
    });
  };
  bladeMenu._update = function({ id, parentId = '0', code, name, alias, path, source, sort, category, action, isOpen, remark }) {
    return bladeMenu.update({ parentId, code, name, alias, path, source, sort, category, action, isOpen, remark }, { where: { id } });
  };
  bladeMenu._delete = function({ id }) {
    return bladeMenu.destroy({ where: { id } });
  };
  bladeMenu._findList = function({ name, parentId }) {
    const Op = app.Sequelize.Op;
    return bladeMenu.findAll({
      attributes: {
        include: [[ app.Sequelize.fn('COUNT', app.Sequelize.col('children.id')), 'count' ]],
      },
      include: {
        model: bladeMenu,
        as: 'children',
        attributes: [],
      },
      where: { [Op.and]: [ name ? { name: { [Op.like]: `%${name}%` } } : null, parentId ? { parentId } : null ] },
      group: [ 'bladeMenu.id' ],
      order: [[ 'sort', 'DESC' ]],
    });
  };
  bladeMenu._findTree = function() {
    return bladeMenu.findAll({ attributes: [ 'id', 'name', 'parentId' ], order: [[ 'sort', 'DESC' ]], raw: true });
  };
  bladeMenu._findOne = params => {
    return bladeMenu.findOne({ where: params, include: { model: bladeMenu, as: 'parent', attributes: [ 'name', 'id' ] } });
  };
  bladeMenu.associate = function() {
    bladeMenu.hasMany(bladeMenu, { foreignKey: 'parentId', sourceKey: 'id', as: 'children' });
    bladeMenu.belongsTo(bladeMenu, { foreignKey: 'parentId', targetKey: 'id', as: 'parent' });
  };
  return bladeMenu;
};
