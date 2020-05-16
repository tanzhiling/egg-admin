'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeUserDept = app.model.define('bladeUserDept', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: '0',
      field: 'user_id',
    },
    deptId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: '0',
      field: 'dept_id',
    },
  }, {
    tableName: 'blade_user_dept',
  });
  return bladeUserDept;
};
