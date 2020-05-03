-- 角色表
CREATE TABLE sys_role
(
	role_code varchar(64) NOT NULL COMMENT '角色编码',
	role_name varchar(100) NOT NULL COMMENT '角色名称',
	role_type varchar(100) COMMENT '角色分类（高管、中层、基层、其它）',
	role_sort decimal(10) COMMENT '角色排序（升序）',
	is_sys char(1) COMMENT '系统内置（1是 0否）',
	user_type varchar(16) COMMENT '用户类型（employee员工 member会员）',
	data_scope char(1) COMMENT '数据范围设置（0未设置  1全部数据 2自定义数据）',
	biz_scope varchar(255) COMMENT '适应业务范围（不同的功能，不同的数据权限支持）',
	status char(1) DEFAULT '0' NOT NULL COMMENT '状态（0正常 1删除 2停用）',
	create_by varchar(64) NOT NULL COMMENT '创建者',
	create_date datetime NOT NULL COMMENT '创建时间',
	update_by varchar(64) NOT NULL COMMENT '更新者',
	update_date datetime NOT NULL COMMENT '更新时间',
	remarks varchar(500) COMMENT '备注信息',
	corp_code varchar(64) DEFAULT '0' NOT NULL COMMENT '租户代码',
	corp_name varchar(100) DEFAULT 'JeeSite' NOT NULL COMMENT '租户名称',
	PRIMARY KEY (role_code)
) COMMENT = '角色表';
