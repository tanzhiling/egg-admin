-- 公司部门关联表
CREATE TABLE sys_company_office
(
	company_code varchar(64) NOT NULL COMMENT '公司编码',
	office_code varchar(64) NOT NULL COMMENT '机构编码',
	PRIMARY KEY (company_code, office_code)
) COMMENT = '公司部门关联表';