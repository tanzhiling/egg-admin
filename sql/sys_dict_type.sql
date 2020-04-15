
-- 字典类型表
CREATE TABLE sys_dict_type
(
	id varchar(64) NOT NULL COMMENT '编号',
	dict_name varchar(100) NOT NULL COMMENT '字典名称',
	dict_type varchar(100) NOT NULL COMMENT '字典类型',
	is_sys char(1) NOT NULL COMMENT '是否系统字典',
	status char(1) DEFAULT '0' NOT NULL COMMENT '状态（0正常 1删除 2停用）',
	create_by varchar(64) NOT NULL COMMENT '创建者',
	create_date datetime NOT NULL COMMENT '创建时间',
	update_by varchar(64) NOT NULL COMMENT '更新者',
	update_date datetime NOT NULL COMMENT '更新时间',
	remarks varchar(500) COMMENT '备注信息',
	PRIMARY KEY (id)
) COMMENT = '字典类型表';