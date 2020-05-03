
-- 用户与角色关联表
CREATE TABLE sys_user_role
(
	user_code varchar(100) NOT NULL COMMENT '用户编码',
	role_code varchar(64) NOT NULL COMMENT '角色编码',
	PRIMARY KEY (user_code, role_code)
) COMMENT = '用户与角色关联表';

