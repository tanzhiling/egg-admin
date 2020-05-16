'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const bladeRoleMenu = app.model.define('bladeProcessLeave', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    processDefinitionId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'process_definition_id',
    },
    processInstanceId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'process_instance_id',
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'start_time',
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'end_time',
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'reason',
    },
    taskUser: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'task_user',
    },
    applyTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'apply_time',
    },
    createUser: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'create_user',
    },
    createDept: {
      type: DataTypes.BIGINT,
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
      type: DataTypes.BIGINT,
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
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'status',
    },
    isDeleted: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'is_deleted',
    },
  }, {
    tableName: 'blade_process_leave',
  });
  return bladeRoleMenu;
};
