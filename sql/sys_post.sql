-- 员工岗位表
CREATE TABLE sys_post
(
	post_code varchar(64) NOT NULL COMMENT '岗位编码',
	post_name varchar(100) NOT NULL COMMENT '岗位名称',
	post_type varchar(100) COMMENT '岗位分类（高管、中层、基层）',
	post_sort decimal(10) COMMENT '岗位排序（升序）',
	status char(1) DEFAULT '0' NOT NULL COMMENT '状态（0正常 1删除 2停用）',
	create_by varchar(64) NOT NULL COMMENT '创建者',
	create_date datetime NOT NULL COMMENT '创建时间',
	update_by varchar(64) NOT NULL COMMENT '更新者',
	update_date datetime NOT NULL COMMENT '更新时间',
	remarks varchar(500) COMMENT '备注信息',
	corp_code varchar(64) DEFAULT '0' NOT NULL COMMENT '租户代码',
	corp_name varchar(100) DEFAULT 'JeeSite' NOT NULL COMMENT '租户名称',
	PRIMARY KEY (post_code)
) COMMENT = '员工岗位表';
