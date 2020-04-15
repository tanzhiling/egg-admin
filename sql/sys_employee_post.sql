-- 员工与岗位关联表
CREATE TABLE sys_employee_post
(
	emp_code varchar(64) NOT NULL COMMENT '员工编码',
	post_code varchar(64) NOT NULL COMMENT '岗位编码',
	PRIMARY KEY (emp_code, post_code)
) COMMENT = '员工与岗位关联表';