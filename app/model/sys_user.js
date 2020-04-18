'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;
  return app.model.define(
    'sys_user',
    {
      user_code: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
      },
      user_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      nick_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      mobile: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      sex: {
        type: DataTypes.CHAR(1),
        allowNull: true,
      },
      avatar: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
      sign: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      wx_openid: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      mobile_imei: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      user_type: {
        type: DataTypes.STRING(16),
        allowNull: false,
      },
      ref_code: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      ref_name: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      mgr_type: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      pwd_security_level: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      pwd_update_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      pwd_update_record: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
      pwd_question: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      pwd_question_answer: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      pwd_question_2: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      pwd_question_answer_2: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      pwd_question_3: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      pwd_question_answer_3: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      pwd_quest_update_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      last_login_ip: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      last_login_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      freeze_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      freeze_cause: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      user_weight: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: '0',
      },
      status: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      create_by: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      create_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      update_by: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      update_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      remarks: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      corp_code: {
        type: DataTypes.STRING(64),
        allowNull: false,
        defaultValue: '0',
      },
      corp_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'JeeSite',
      },
    },
    {
      tableName: 'sys_user',
    }
  );
};
