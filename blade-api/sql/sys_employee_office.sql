-- 员工附属机构关系表
CREATE TABLE sys_employee_office
(
	id varchar(64) NOT NULL COMMENT '编号',
	emp_code varchar(64) NOT NULL COMMENT '员工编码',
	office_code varchar(64) NOT NULL COMMENT '机构编码',
	post_code varchar(64) COMMENT '岗位编码',
	PRIMARY KEY (id)
) COMMENT = '员工附属机构关系表';