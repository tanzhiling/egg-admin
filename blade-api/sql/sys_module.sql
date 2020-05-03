-- 模块表
CREATE TABLE sys_module
(
	module_code varchar(64) NOT NULL COMMENT '模块编码',
	module_name varchar(100) NOT NULL COMMENT '模块名称',
	description varchar(500) COMMENT '模块描述',
	main_class_name varchar(500) COMMENT '主类全名',
	current_version varchar(50) COMMENT '当前版本',
	upgrade_info varchar(300) COMMENT '升级信息',
	status char(1) DEFAULT '0' NOT NULL COMMENT '状态（0正常 1删除 2停用）',
	create_by varchar(64) NOT NULL COMMENT '创建者',
	create_date datetime NOT NULL COMMENT '创建时间',
	update_by varchar(64) NOT NULL COMMENT '更新者',
	update_date datetime NOT NULL COMMENT '更新时间',
	remarks varchar(500) COMMENT '备注信息',
	PRIMARY KEY (module_code)
) COMMENT = '模块表';
