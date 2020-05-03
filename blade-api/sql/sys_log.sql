-- 操作日志表
CREATE TABLE sys_log
(
	id varchar(64) NOT NULL COMMENT '编号',
	log_type varchar(50) NOT NULL COMMENT '日志类型',
	log_title varchar(500) NOT NULL COMMENT '日志标题',
	create_by varchar(64) NOT NULL COMMENT '创建者',
	create_by_name varchar(100) NOT NULL COMMENT '用户名称',
	create_date datetime NOT NULL COMMENT '创建时间',
	request_uri varchar(500) COMMENT '请求URI',
	request_method varchar(10) COMMENT '操作方式',
	request_params longtext COMMENT '操作提交的数据',
	diff_modify_data text COMMENT '新旧数据比较结果',
	biz_key varchar(64) COMMENT '业务主键',
	biz_type varchar(64) COMMENT '业务类型',
	remote_addr varchar(255) NOT NULL COMMENT '操作IP地址',
	server_addr varchar(255) NOT NULL COMMENT '请求服务器地址',
	is_exception char(1) COMMENT '是否异常',
	exception_info text COMMENT '异常信息',
	user_agent varchar(500) COMMENT '用户代理',
	device_name varchar(100) COMMENT '设备名称/操作系统',
	browser_name varchar(100) COMMENT '浏览器名称',
	execute_time decimal(19) COMMENT '执行时间',
	corp_code varchar(64) DEFAULT '0' NOT NULL COMMENT '租户代码',
	corp_name varchar(100) DEFAULT 'JeeSite' NOT NULL COMMENT '租户名称',
	PRIMARY KEY (id)
) COMMENT = '操作日志表';