'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const SysOffice = app.model.define(
    'sys_office',
    {
      id: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: 'office_code',
      },
      officeCode: {
        type: DataTypes.STRING(64),
        allowNull: false,
        primaryKey: true,
        field: 'office_code',
      },
      parentId: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: 'parent_code',
      },
      parentIds: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        field: 'parent_codes',
      },
      sort: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        field: 'tree_sort',
        autoIncrement: true,
        defaultValue: 10,
      },
      treeSorts: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        field: 'tree_sorts',
      },
      treeLeaf: {
        type: DataTypes.CHAR(1),
        allowNull: true,
        field: 'tree_leaf',
      },
      treeLevel: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        field: 'tree_level',
      },
      treeNames: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        field: 'tree_names',
      },
      viewCode: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'view_code',
      },
      officeName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'office_name',
      },
      fullName: {
        type: DataTypes.STRING(200),
        allowNull: false,
        field: 'full_name',
      },
      officeType: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        field: 'office_type',
      },
      leader: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      zipCode: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'zip_code',
      },
      email: {
        type: DataTypes.STRING(300),
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
    },
    {
      tableName: 'sys_office',
      moduleName: 'SysOffice',
    }
  );

  SysOffice._add = async function({ officeCode, parentId = '0', officeName, fullName, officeType, leader, phone, address, zipCode, email, status, remarks, createBy, updateBy }) {
    let data,
      parentIds = '0,';
    if (parentId) {
      data = await SysOffice.findOne({ where: { id: parentId } });
      parentIds = data.parentIds.concat(parentId, ',');
    }
    return SysOffice.findOrCreate({
      where: { officeCode },
      defaults: {
        id: officeCode, viewCode: officeCode, parentId, parentIds, officeName, fullName, officeType, leader, phone, address, zipCode, email, status, remarks, createBy, updateBy,
      },
    });
  };
  SysOffice._update = function({ dictType, dictName, id, isSys, remarks, updateBy }) {
    return SysOffice.update({ dictType, dictName, isSys, remarks, updateBy }, { where: { id } });
  };
  SysOffice._delete = function({ id }) {
    return SysOffice.destroy({ where: { id } });
  };
  SysOffice._findList = async function({ officeCode, officeName, size = 10, current = 1 }) {
    const Op = app.Sequelize.Op;
    const { rows: list, count: total } = await SysOffice.findAndCountAll({
      attributes: [ 'id', 'parentId', 'parentIds', 'sort', 'officeCode', 'officeName', 'fullName', 'officeType', 'status', 'updateDate' ],
      where: {
        [Op.and]: [
          officeCode ? { officeCode: { [Op.like]: `%${officeCode}%` } } : null,
          officeName ? { officeName: { [Op.like]: `%${officeName}%` } } : null,
        ],
      },
      limit: size,
      offset: (current - 1) * size,
    });
    return { list, size, current, total };
  };
  SysOffice._findOne = function({ id }) {
    return SysOffice.findOne({ where: { id } });
  };
  SysOffice._findTree = function() {
    return SysOffice.findAll({
      attributes: [ 'id', 'parentId', 'parentIds', 'officeCode', 'officeName' ],
      where: { parentId: '0' },
      include: [{ model: SysOffice, as: 'children', attributes: [ 'id', 'parentId', 'parentIds', 'officeCode', 'officeName' ] }],
    });
  };
  SysOffice.hasMany(SysOffice, {
    sourceKey: 'id',
    foreignKey: 'parentId',
    as: 'children',
  });
  return SysOffice;
};
