-- 角色与菜单关联表
CREATE TABLE sys_role_menu
(
	role_code varchar(64) NOT NULL COMMENT '角色编码',
	menu_code varchar(64) NOT NULL COMMENT '菜单编码',
	PRIMARY KEY (role_code, menu_code)
) COMMENT = '角色与菜单关联表';
