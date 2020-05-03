-- 字典数据表
CREATE TABLE sys_dict_data
(
	dict_code varchar(64) NOT NULL COMMENT '字典编码',
	parent_code varchar(64) NOT NULL COMMENT '父级编号',
	parent_codes varchar(1000) NOT NULL COMMENT '所有父级编号',
	tree_sort decimal(10) NOT NULL COMMENT '本级排序号（升序）',
	tree_sorts varchar(1000) NOT NULL COMMENT '所有级别排序号',
	tree_leaf char(1) NOT NULL COMMENT '是否最末级',
	tree_level decimal(4) NOT NULL COMMENT '层次级别',
	tree_names varchar(1000) NOT NULL COMMENT '全节点名',
	dict_label varchar(100) NOT NULL COMMENT '字典标签',
	dict_value varchar(100) NOT NULL COMMENT '字典键值',
	dict_type varchar(100) NOT NULL COMMENT '字典类型',
	is_sys char(1) NOT NULL COMMENT '系统内置（1是 0否）',
	description varchar(500) COMMENT '字典描述',
	css_style varchar(500) COMMENT 'css样式（如：color:red)',
	css_class varchar(500) COMMENT 'css类名（如：red）',
	status char(1) DEFAULT '0' NOT NULL COMMENT '状态（0正常 1删除 2停用）',
	create_by varchar(64) NOT NULL COMMENT '创建者',
	create_date datetime NOT NULL COMMENT '创建时间',
	update_by varchar(64) NOT NULL COMMENT '更新者',
	update_date datetime NOT NULL COMMENT '更新时间',
	remarks varchar(500) COMMENT '备注信息',
	corp_code varchar(64) DEFAULT '0' NOT NULL COMMENT '租户代码',
	corp_name varchar(100) DEFAULT 'JeeSite' NOT NULL COMMENT '租户名称',
	PRIMARY KEY (dict_code)
) COMMENT = '字典数据表';
