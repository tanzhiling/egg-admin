
-- 角色数据权限表
CREATE TABLE sys_role_data_scope
(
	role_code varchar(64) NOT NULL COMMENT '控制角色编码',
	ctrl_type varchar(20) NOT NULL COMMENT '控制类型',
	ctrl_data varchar(64) NOT NULL COMMENT '控制数据',
	ctrl_permi varchar(64) NOT NULL COMMENT '控制权限',
	PRIMARY KEY (role_code, ctrl_type, ctrl_data, ctrl_permi)
) COMMENT = '角色数据权限表';