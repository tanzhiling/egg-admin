-- 员工表
CREATE TABLE sys_employee
(
	emp_code varchar(64) NOT NULL COMMENT '员工编码',
	emp_name varchar(100) NOT NULL COMMENT '员工姓名',
	emp_name_en varchar(100) COMMENT '员工英文名',
	emp_no varchar(100) COMMENT '员工工号',
	office_code varchar(64) NOT NULL COMMENT '机构编码',
	office_name varchar(100) NOT NULL COMMENT '机构名称',
	company_code varchar(64) COMMENT '公司编码',
	company_name varchar(200) COMMENT '公司名称',
	status char(1) NOT NULL COMMENT '状态（0在职 1删除 2离职）',
	create_by varchar(64) NOT NULL COMMENT '创建者',
	create_date datetime NOT NULL COMMENT '创建时间',
	update_by varchar(64) NOT NULL COMMENT '更新者',
	update_date datetime NOT NULL COMMENT '更新时间',
	remarks varchar(500) COMMENT '备注信息',
	corp_code varchar(64) DEFAULT '0' NOT NULL COMMENT '租户代码',
	corp_name varchar(100) DEFAULT 'JeeSite' NOT NULL COMMENT '租户名称',
	PRIMARY KEY (emp_code)
) COMMENT = '员工表';