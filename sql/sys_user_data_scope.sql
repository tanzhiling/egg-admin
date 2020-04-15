-- 用户数据权限表
CREATE TABLE sys_user_data_scope
(
	user_code varchar(100) NOT NULL COMMENT '控制用户编码',
	ctrl_type varchar(20) NOT NULL COMMENT '控制类型',
	ctrl_data varchar(64) NOT NULL COMMENT '控制数据',
	ctrl_permi varchar(64) NOT NULL COMMENT '控制权限',
	PRIMARY KEY (user_code, ctrl_type, ctrl_data, ctrl_permi)
) COMMENT = '用户数据权限表';