-- 参数配置表
CREATE TABLE sys_config
(
	id varchar(64) NOT NULL COMMENT '编号',
	config_name varchar(100) NOT NULL COMMENT '名称',
	config_key varchar(100) NOT NULL COMMENT '参数键',
	config_value varchar(1000) COMMENT '参数值',
	is_sys char(1) NOT NULL COMMENT '系统内置（1是 0否）',
	create_by varchar(64) NOT NULL COMMENT '创建者',
	create_date datetime NOT NULL COMMENT '创建时间',
	update_by varchar(64) NOT NULL COMMENT '更新者',
	update_date datetime NOT NULL COMMENT '更新时间',
	remarks varchar(500) COMMENT '备注信息',
	PRIMARY KEY (id)
) COMMENT = '参数配置表';
