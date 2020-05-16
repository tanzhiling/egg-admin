'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeUserDept = app.model.define('bladeUserDept', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    userId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: '0',
      field: 'user_id',
    },
    deptId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: '0',
      field: 'dept_id',
    },
  }, {
    tableName: 'blade_user_dept',
  });
  return bladeUserDept;
};
