/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50727
Source Host           : localhost:3306
Source Database       : blade

Target Server Type    : MYSQL
Target Server Version : 50727
File Encoding         : 65001

Date: 2020-05-24 12:39:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for blade_client
-- ----------------------------
DROP TABLE IF EXISTS `blade_client`;
CREATE TABLE `blade_client` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `client_id` varchar(48) NOT NULL COMMENT '客户端id',
  `client_secret` varchar(256) NOT NULL COMMENT '客户端密钥',
  `resource_ids` varchar(256) DEFAULT NULL COMMENT '资源集合',
  `scope` varchar(256) NOT NULL COMMENT '授权范围',
  `authorized_grant_types` varchar(256) NOT NULL COMMENT '授权类型',
  `web_server_redirect_uri` varchar(256) DEFAULT NULL COMMENT '回调地址',
  `authorities` varchar(256) DEFAULT NULL COMMENT '权限',
  `access_token_validity` int(11) NOT NULL COMMENT '令牌过期秒数',
  `refresh_token_validity` int(11) NOT NULL COMMENT '刷新令牌过期秒数',
  `additional_information` varchar(4096) DEFAULT NULL COMMENT '附加说明',
  `autoapprove` varchar(256) DEFAULT NULL COMMENT '自动授权',
  `create_user` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_dept` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` char(1) NOT NULL COMMENT '状态',
  `is_deleted` int(2) NOT NULL COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='客户端表';

-- ----------------------------
-- Records of blade_client
-- ----------------------------
INSERT INTO `blade_client` VALUES ('1123598811738675201', 'sword', 'sword_secret', null, 'all', 'refresh_token,password,authorization_code,captcha', 'http://localhost:8888', null, '3600', '604800', null, null, '1123598815738675201', '1123598813738675201', '2019-03-24 10:40:55', '1123598815738675201', '2019-03-24 10:40:59', '1', '0');
INSERT INTO `blade_client` VALUES ('1123598811738675202', 'saber', 'saber_secret', null, 'all', 'refresh_token,password,authorization_code,captcha', 'http://localhost:8080', null, '3600', '604800', null, null, '1123598815738675201', '1123598813738675201', '2019-03-24 10:42:29', '1123598815738675201', '2019-03-24 10:42:32', '1', '0');

-- ----------------------------
-- Table structure for blade_code
-- ----------------------------
DROP TABLE IF EXISTS `blade_code`;
CREATE TABLE `blade_code` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `datasource_id` varchar(64) DEFAULT NULL COMMENT '数据源主键',
  `service_name` varchar(64) DEFAULT NULL COMMENT '服务名称',
  `code_name` varchar(64) DEFAULT NULL COMMENT '模块名称',
  `table_name` varchar(64) DEFAULT NULL COMMENT '表名',
  `table_prefix` varchar(64) DEFAULT NULL COMMENT '表前缀',
  `pk_name` varchar(32) DEFAULT NULL COMMENT '主键名',
  `package_name` varchar(500) DEFAULT NULL COMMENT '后端包名',
  `base_mode` int(2) DEFAULT NULL COMMENT '基础业务模式',
  `wrap_mode` int(2) DEFAULT NULL COMMENT '包装器模式',
  `api_path` varchar(2000) DEFAULT NULL COMMENT '后端路径',
  `web_path` varchar(2000) DEFAULT NULL COMMENT '前端路径',
  `is_deleted` int(2) DEFAULT '0' COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='代码生成表';

-- ----------------------------
-- Records of blade_code
-- ----------------------------
INSERT INTO `blade_code` VALUES ('1123598812738675201', '1161483357481541634', 'blade-demo', '通知公告', 'blade_notice', 'blade_', 'id', 'org.springblade.desktop', '1', '1', 'D:\\Develop\\WorkSpace\\Git\\SpringBlade\\blade-ops\\blade-develop', 'D:\\Develop\\WorkSpace\\Git\\Sword', '0');

-- ----------------------------
-- Table structure for blade_datasource
-- ----------------------------
DROP TABLE IF EXISTS `blade_datasource`;
CREATE TABLE `blade_datasource` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `name` varchar(100) DEFAULT NULL COMMENT '名称',
  `driver_class` varchar(100) DEFAULT NULL COMMENT '驱动类',
  `url` varchar(500) DEFAULT NULL COMMENT '连接地址',
  `username` varchar(50) DEFAULT NULL COMMENT '用户名',
  `password` varchar(50) DEFAULT NULL COMMENT '密码',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `create_user` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_dept` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` char(1) DEFAULT NULL COMMENT '状态',
  `is_deleted` int(2) DEFAULT NULL COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='数据源配置表';

-- ----------------------------
-- Records of blade_datasource
-- ----------------------------
INSERT INTO `blade_datasource` VALUES ('1161483357481541634', 'mysql', 'com.mysql.cj.jdbc.Driver', 'jdbc:mysql://localhost:3306/bladex?useSSL=false&useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull&transformedBitIsBoolean=true&serverTimezone=GMT%2B8&nullCatalogMeansCurrent=true&allowPublicKeyRetrieval=true', 'root', 'root', 'mysql', '1123598821738675201', '1123598813738675201', '2019-08-14 11:43:06', '1123598821738675201', '2019-08-14 11:43:06', '1', '0');
INSERT INTO `blade_datasource` VALUES ('1161483504353484802', 'postgresql', 'org.postgresql.Driver', 'jdbc:postgresql://127.0.0.1:5432/bladex', 'postgres', '123456', 'postgresql', '1123598821738675201', '1123598813738675201', '2019-08-14 11:43:41', '1123598821738675201', '2019-08-14 11:43:41', '1', '0');
INSERT INTO `blade_datasource` VALUES ('1161483594023510018', 'oracle', 'oracle.jdbc.OracleDriver', 'jdbc:oracle:thin:@127.0.0.1:49161:orcl', 'BLADEX', 'bladex', 'oracle', '1123598821738675201', '1123598813738675201', '2019-08-14 11:44:03', '1123598821738675201', '2019-08-14 11:44:03', '1', '0');

-- ----------------------------
-- Table structure for blade_dept
-- ----------------------------
DROP TABLE IF EXISTS `blade_dept`;
CREATE TABLE `blade_dept` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `tenant_id` varchar(12) DEFAULT '000000' COMMENT '租户ID',
  `parent_id` varchar(64) DEFAULT '0' COMMENT '父主键',
  `dept_category` char(2) DEFAULT NULL COMMENT '部门类型',
  `dept_name` varchar(45) DEFAULT NULL COMMENT '部门名',
  `full_name` varchar(45) DEFAULT NULL COMMENT '部门全称',
  `sort` int(11) DEFAULT NULL COMMENT '排序',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `is_deleted` int(2) DEFAULT '0' COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='机构表';

-- ----------------------------
-- Records of blade_dept
-- ----------------------------
INSERT INTO `blade_dept` VALUES ('SD', 'YHD', '0', '1', '山东公司', '山东公司', '10', null, '0');
INSERT INTO `blade_dept` VALUES ('SDJN', 'YHD', 'SD', '2', '济南公司	', '山东济南公司', '20', null, '0');
INSERT INTO `blade_dept` VALUES ('SDJN01', 'YHD', 'SDJN', '3', '企管部', '山东济南企管部', '40', null, '0');
INSERT INTO `blade_dept` VALUES ('SDJN02', 'YHD', 'SDJN', '3', '财务部', '山东济南财务部', '50', null, '0');
INSERT INTO `blade_dept` VALUES ('SDQD', 'YHD', 'SD', '2', '青岛公司', '山东青岛公司', '30', null, '0');

-- ----------------------------
-- Table structure for blade_dict_data
-- ----------------------------
DROP TABLE IF EXISTS `blade_dict_data`;
CREATE TABLE `blade_dict_data` (
  `id` varchar(64) NOT NULL COMMENT '字典编码',
  `sort` decimal(10,0) NOT NULL COMMENT '本级排序号（升序）',
  `dict_label` varchar(100) NOT NULL COMMENT '字典标签',
  `dict_value` varchar(100) NOT NULL COMMENT '字典键值',
  `dict_type` varchar(100) NOT NULL COMMENT '字典类型',
  `status` char(1) NOT NULL DEFAULT '0' COMMENT '状态（0正常 1删除 2停用）',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  `remarks` varchar(500) DEFAULT NULL COMMENT '备注信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='字典数据表';

-- ----------------------------
-- Records of blade_dict_data
-- ----------------------------
INSERT INTO `blade_dict_data` VALUES ('133307608cfc11ea9f08b1b11694d3b5', '30', '保密', '0', 'sys_user_sex', '1', '2020-05-03 13:08:07', '2020-05-03 13:08:07', '');
INSERT INTO `blade_dict_data` VALUES ('1e3f46f0926f11eabce4b5fd1f9e5277', '10', '省级公司', '1', 'sys_office_type', '1', '2020-05-10 11:34:13', '2020-05-10 11:34:13', '');
INSERT INTO `blade_dict_data` VALUES ('21b456662f4baf5bb82037446d669c97', '20', '中层', '2', 'sys_post_type', '1', '2020-05-17 10:39:38', '2020-05-17 10:39:38', '');
INSERT INTO `blade_dict_data` VALUES ('242374b0926f11eabce4b5fd1f9e5277', '20', '市级公司', '2', 'sys_office_type', '1', '2020-05-10 11:34:23', '2020-05-10 11:34:23', '');
INSERT INTO `blade_dict_data` VALUES ('29d48480926f11eabce4b5fd1f9e5277', '30', '部门', '3', 'sys_office_type', '1', '2020-05-10 11:34:32', '2020-05-10 11:34:32', '');
INSERT INTO `blade_dict_data` VALUES ('3a9bc7b536bf601de270a3fd828d63fb', '10', '高管', '1', 'sys_post_type', '1', '2020-05-17 10:36:41', '2020-05-17 10:36:41', '');
INSERT INTO `blade_dict_data` VALUES ('568332208cfb11ea833a2f84cb86800e', '20', '女', '2', 'sys_user_sex', '1', '2020-05-03 13:02:50', '2020-05-03 13:02:50', '');
INSERT INTO `blade_dict_data` VALUES ('629ca5d2d262ae37b197bf69ca1d9f67', '30', '基层', '3', 'sys_post_type', '1', '2020-05-17 10:39:46', '2020-05-17 10:39:46', '');
INSERT INTO `blade_dict_data` VALUES ('63a083108e6b11eab0d2eb833f68fd4f', '20', '停用', '0', 'sys_status', '1', '2020-05-05 08:57:27', '2020-05-05 08:57:27', '');
INSERT INTO `blade_dict_data` VALUES ('a61f04108cf811ea996463172ad84f76', '10', '男', '1', 'sys_user_sex', '1', '2020-05-03 12:43:35', '2020-05-03 12:43:35', '性别男');
INSERT INTO `blade_dict_data` VALUES ('e14a0aee5c04ce352b249da125cee223', '40', '其它', '4', 'sys_post_type', '1', '2020-05-17 10:39:58', '2020-05-17 10:39:58', '');
INSERT INTO `blade_dict_data` VALUES ('ebf1c0108e6d11eaa6a9a91dbccafb79', '10', '启用', '1', 'sys_status', '1', '2020-05-05 09:15:34', '2020-05-05 09:15:34', '启用');

-- ----------------------------
-- Table structure for blade_dict_type
-- ----------------------------
DROP TABLE IF EXISTS `blade_dict_type`;
CREATE TABLE `blade_dict_type` (
  `id` varchar(64) NOT NULL COMMENT '编号',
  `sort` decimal(10,0) NOT NULL,
  `dict_name` varchar(100) NOT NULL COMMENT '字典名称',
  `dict_type` varchar(100) NOT NULL COMMENT '字典类型',
  `status` char(1) NOT NULL DEFAULT '0' COMMENT '状态（0正常 1删除 2停用）',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  `remarks` varchar(500) DEFAULT NULL COMMENT '备注信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='字典类型表';

-- ----------------------------
-- Records of blade_dict_type
-- ----------------------------
INSERT INTO `blade_dict_type` VALUES ('04d94b508c3b11ea85db7fabb96ba0e0', '0', '角色分类', 'sys_role_type', '1', '2020-05-20 14:44:38', '2020-05-30 14:45:00', '角色分类');
INSERT INTO `blade_dict_type` VALUES ('1fea9d908c3b11ea85db7fabb96ba0e0', '10', '机构类型', 'sys_office_type', '1', '2020-05-13 14:44:41', '2020-05-29 14:45:03', '机构类型');
INSERT INTO `blade_dict_type` VALUES ('7f3866ec3390c640d8bef4c8fa7c93f4', '20', '岗位分类', 'sys_post_type', '1', '2020-05-17 10:31:19', '2020-05-17 10:31:19', '岗位分类');
INSERT INTO `blade_dict_type` VALUES ('8e12c0008cee11eab961c5d16e1b0775', '60', '是否', 'sys_yes_no', '1', '2020-05-05 14:44:48', '2020-05-29 14:45:09', '是否');
INSERT INTO `blade_dict_type` VALUES ('9b6ce8b08c3611ea85db7fabb96ba0e0', '80', '状态', 'sys_status', '1', '2020-05-14 14:44:50', '2020-05-29 14:45:12', '状态');
INSERT INTO `blade_dict_type` VALUES ('a5dc42108c7111ea97b587654e5b156c', '50', '菜单类型', 'sys_menu_type', '1', '2020-05-11 14:44:53', '2020-05-30 14:45:15', '菜单类型');
INSERT INTO `blade_dict_type` VALUES ('c75699608c3811ea85db7fabb96ba0e0', '90', '用户性别', 'sys_user_sex', '1', '2020-05-12 14:44:56', '2020-05-31 14:45:18', '用户性别');
INSERT INTO `blade_dict_type` VALUES ('f3f10e608c3811ea85db7fabb96ba0e0', '70', '用户状态', 'sys_user_status', '1', '2020-05-05 14:44:58', '2020-06-27 14:45:21', '用户状态');

-- ----------------------------
-- Table structure for blade_log_api
-- ----------------------------
DROP TABLE IF EXISTS `blade_log_api`;
CREATE TABLE `blade_log_api` (
  `id` varchar(64) NOT NULL COMMENT '编号',
  `tenant_id` varchar(12) DEFAULT '000000' COMMENT '租户ID',
  `service_id` varchar(32) DEFAULT NULL COMMENT '服务ID',
  `server_host` varchar(255) DEFAULT NULL COMMENT '服务器名',
  `server_ip` varchar(255) DEFAULT NULL COMMENT '服务器IP地址',
  `env` varchar(255) DEFAULT NULL COMMENT '服务器环境',
  `type` char(1) DEFAULT '1' COMMENT '日志类型',
  `title` varchar(255) DEFAULT '' COMMENT '日志标题',
  `method` varchar(10) DEFAULT NULL COMMENT '操作方式',
  `request_uri` varchar(255) DEFAULT NULL COMMENT '请求URI',
  `user_agent` varchar(1000) DEFAULT NULL COMMENT '用户代理',
  `remote_ip` varchar(255) DEFAULT NULL COMMENT '操作IP地址',
  `method_class` varchar(255) DEFAULT NULL COMMENT '方法类',
  `method_name` varchar(255) DEFAULT NULL COMMENT '方法名',
  `params` text COMMENT '操作提交的数据',
  `time` varchar(64) DEFAULT NULL COMMENT '执行时间',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='接口日志表';

-- ----------------------------
-- Records of blade_log_api
-- ----------------------------

-- ----------------------------
-- Table structure for blade_log_error
-- ----------------------------
DROP TABLE IF EXISTS `blade_log_error`;
CREATE TABLE `blade_log_error` (
  `id` varchar(64) NOT NULL COMMENT '编号',
  `tenant_id` varchar(12) DEFAULT '000000' COMMENT '租户ID',
  `service_id` varchar(32) DEFAULT NULL COMMENT '服务ID',
  `server_host` varchar(255) DEFAULT NULL COMMENT '服务器名',
  `server_ip` varchar(255) DEFAULT NULL COMMENT '服务器IP地址',
  `env` varchar(255) DEFAULT NULL COMMENT '系统环境',
  `method` varchar(10) DEFAULT NULL COMMENT '操作方式',
  `request_uri` varchar(255) DEFAULT NULL COMMENT '请求URI',
  `user_agent` varchar(1000) DEFAULT NULL COMMENT '用户代理',
  `stack_trace` text COMMENT '堆栈',
  `exception_name` varchar(255) DEFAULT NULL COMMENT '异常名',
  `message` text COMMENT '异常信息',
  `line_number` int(11) DEFAULT NULL COMMENT '错误行数',
  `remote_ip` varchar(255) DEFAULT NULL COMMENT '操作IP地址',
  `method_class` varchar(255) DEFAULT NULL COMMENT '方法类',
  `file_name` varchar(1000) DEFAULT NULL COMMENT '文件名',
  `method_name` varchar(255) DEFAULT NULL COMMENT '方法名',
  `params` text COMMENT '操作提交的数据',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='错误日志表';

-- ----------------------------
-- Records of blade_log_error
-- ----------------------------

-- ----------------------------
-- Table structure for blade_log_usual
-- ----------------------------
DROP TABLE IF EXISTS `blade_log_usual`;
CREATE TABLE `blade_log_usual` (
  `id` varchar(64) NOT NULL COMMENT '编号',
  `tenant_id` varchar(12) DEFAULT '000000' COMMENT '租户ID',
  `service_id` varchar(32) DEFAULT NULL COMMENT '服务ID',
  `server_host` varchar(255) DEFAULT NULL COMMENT '服务器名',
  `server_ip` varchar(255) DEFAULT NULL COMMENT '服务器IP地址',
  `env` varchar(255) DEFAULT NULL COMMENT '系统环境',
  `log_level` varchar(10) DEFAULT NULL COMMENT '日志级别',
  `log_id` varchar(100) DEFAULT NULL COMMENT '日志业务id',
  `log_data` text COMMENT '日志数据',
  `method` varchar(10) DEFAULT NULL COMMENT '操作方式',
  `request_uri` varchar(255) DEFAULT NULL COMMENT '请求URI',
  `remote_ip` varchar(255) DEFAULT NULL COMMENT '操作IP地址',
  `method_class` varchar(255) DEFAULT NULL COMMENT '方法类',
  `method_name` varchar(255) DEFAULT NULL COMMENT '方法名',
  `user_agent` varchar(1000) DEFAULT NULL COMMENT '用户代理',
  `params` text COMMENT '操作提交的数据',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='通用日志表';

-- ----------------------------
-- Records of blade_log_usual
-- ----------------------------

-- ----------------------------
-- Table structure for blade_menu
-- ----------------------------
DROP TABLE IF EXISTS `blade_menu`;
CREATE TABLE `blade_menu` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `parent_id` varchar(64) NOT NULL DEFAULT '0' COMMENT '父级菜单',
  `code` varchar(255) DEFAULT NULL COMMENT '菜单编号',
  `name` varchar(255) DEFAULT NULL COMMENT '菜单名称',
  `alias` varchar(255) DEFAULT NULL COMMENT '菜单别名',
  `path` varchar(255) DEFAULT NULL COMMENT '请求地址',
  `source` varchar(255) DEFAULT NULL COMMENT '菜单资源',
  `sort` int(2) DEFAULT NULL COMMENT '排序',
  `is_open` int(2) DEFAULT '1' COMMENT '是否打开新页面',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `is_deleted` int(2) DEFAULT '0' COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='菜单表';

-- ----------------------------
-- Records of blade_menu
-- ----------------------------
INSERT INTO `blade_menu` VALUES ('1123598815738675203', '0', 'system', '系统管理', 'menu', '', '', '100', '1', '', '0');
INSERT INTO `blade_menu` VALUES ('1815d6926e2fa85df906cb2a6290bb2e', 'd6bf21c7c1e01b4603fe1a8808b90049', 'sysDept', '机构管理', null, '/sys/dept/dept', '', '90', '1', null, '0');
INSERT INTO `blade_menu` VALUES ('7724d6c8e81685dfe2a09013df8c2190', '1123598815738675203', 'setup', '系统设置', null, '/layout', '', '70', '1', null, '0');
INSERT INTO `blade_menu` VALUES ('8bc402f6db605c7634dca7c0b233df91', '7724d6c8e81685dfe2a09013df8c2190', 'sysDict', '字典管理', null, '/sys/dict/dict', '', '80', '1', null, '0');
INSERT INTO `blade_menu` VALUES ('a43cad6fac9d68ad955ef24d41df10fd', 'd6bf21c7c1e01b4603fe1a8808b90049', 'sysTenant', '租户管理', null, '/sys/tenant/tenant', '', '60', '1', null, '0');
INSERT INTO `blade_menu` VALUES ('a5ddf031977ec5ba10752a094c2b65f0', '1123598815738675203', 'role', '权限管理', null, '/layout', '', '80', '1', null, '0');
INSERT INTO `blade_menu` VALUES ('aff03e4391851b786eda3e97b75b0b24', 'a5ddf031977ec5ba10752a094c2b65f0', 'sysRole', '角色管理', null, '/sys/role/role', '', '90', '1', null, '0');
INSERT INTO `blade_menu` VALUES ('d646a53a1094b95ff9fc40f53777985f', '7724d6c8e81685dfe2a09013df8c2190', 'sysMenu', '菜单管理', null, '/sys/menu/menu', '', '90', '1', null, '0');
INSERT INTO `blade_menu` VALUES ('d6bf21c7c1e01b4603fe1a8808b90049', '1123598815738675203', 'organize', '组织管理', '', '/layout', '', '90', '1', '', '0');
INSERT INTO `blade_menu` VALUES ('dfa1ac420b00ad64ed6fbb640477c9cf', 'd6bf21c7c1e01b4603fe1a8808b90049', 'sysPost', '岗位管理', null, '/sys/post/post', '', '70', '1', null, '0');
INSERT INTO `blade_menu` VALUES ('e55fadbd8bfc0911e60201ce01426930', 'd6bf21c7c1e01b4603fe1a8808b90049', 'sysUser', '用户管理', null, '/sys/user/user', '', '80', '1', null, '0');

-- ----------------------------
-- Table structure for blade_menu_btn
-- ----------------------------
DROP TABLE IF EXISTS `blade_menu_btn`;
CREATE TABLE `blade_menu_btn` (
  `id` varchar(64) NOT NULL,
  `menu_id` varchar(64) NOT NULL COMMENT '菜单id',
  `btn_name` varchar(255) NOT NULL COMMENT '按钮名称',
  `btn_code` varchar(255) NOT NULL COMMENT '按钮编码',
  `status` char(2) NOT NULL COMMENT '状态 1启用 0停用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_menu_btn
-- ----------------------------
INSERT INTO `blade_menu_btn` VALUES ('5cb67c6dac2af168b8eab6f93c77ce4c', '1815d6926e2fa85df906cb2a6290bb2e', '编辑', 'edit', '1');
INSERT INTO `blade_menu_btn` VALUES ('a99a2d2e3c948e4135ad2f5c215f6413', '1815d6926e2fa85df906cb2a6290bb2e', '删除', 'delete', '1');
INSERT INTO `blade_menu_btn` VALUES ('c8d1483f7b44a473fc713a29c7e89684', '1815d6926e2fa85df906cb2a6290bb2e', '新增', 'view', '1');

-- ----------------------------
-- Table structure for blade_notice
-- ----------------------------
DROP TABLE IF EXISTS `blade_notice`;
CREATE TABLE `blade_notice` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `tenant_id` varchar(12) DEFAULT '000000' COMMENT '租户ID',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `category` int(11) DEFAULT NULL COMMENT '类型',
  `release_time` datetime DEFAULT NULL COMMENT '发布时间',
  `content` varchar(2000) DEFAULT NULL COMMENT '内容',
  `create_user` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_dept` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` char(1) DEFAULT NULL COMMENT '状态',
  `is_deleted` int(2) DEFAULT NULL COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='通知公告表';

-- ----------------------------
-- Records of blade_notice
-- ----------------------------
INSERT INTO `blade_notice` VALUES ('1123598818738675223', '000000', '测试公告', '3', '2018-12-31 20:03:31', '222', '1123598821738675201', '1123598813738675201', '2018-12-05 20:03:31', '1123598821738675201', '2018-12-28 11:10:51', '1', '0');
INSERT INTO `blade_notice` VALUES ('1123598818738675224', '000000', '测试公告2', '1', '2018-12-05 20:03:31', '333', '1123598821738675201', '1123598813738675201', '2018-12-28 10:32:26', '1123598821738675201', '2018-12-28 11:10:34', '1', '0');
INSERT INTO `blade_notice` VALUES ('1123598818738675225', '000000', '测试公告3', '6', '2018-12-29 00:00:00', '11111', '1123598821738675201', '1123598813738675201', '2018-12-28 11:03:44', '1123598821738675201', '2018-12-28 11:10:28', '1', '0');

-- ----------------------------
-- Table structure for blade_oss
-- ----------------------------
DROP TABLE IF EXISTS `blade_oss`;
CREATE TABLE `blade_oss` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `tenant_id` varchar(12) DEFAULT '000000' COMMENT '租户ID',
  `category` int(2) DEFAULT NULL COMMENT '分类',
  `oss_code` varchar(32) DEFAULT NULL COMMENT '资源编号',
  `endpoint` varchar(255) DEFAULT NULL COMMENT '资源地址',
  `access_key` varchar(255) DEFAULT NULL COMMENT 'accessKey',
  `secret_key` varchar(255) DEFAULT NULL COMMENT 'secretKey',
  `bucket_name` varchar(255) DEFAULT NULL COMMENT '空间名',
  `app_id` varchar(255) DEFAULT NULL COMMENT '应用ID',
  `region` varchar(255) DEFAULT NULL COMMENT '地域简称',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `create_user` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_dept` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` char(1) DEFAULT NULL COMMENT '状态',
  `is_deleted` int(2) DEFAULT '0' COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='对象存储表';

-- ----------------------------
-- Records of blade_oss
-- ----------------------------
INSERT INTO `blade_oss` VALUES ('1132486733992468482', '000000', '1', 'minio', 'http://127.0.0.1:9000', 'D99KGE6ZTQXSATTJWU24', 'QyVqGnhIQQE734UYSUFlGOZViE6+ZlDEfUG3NjhJ', 'bladex', '', '', '', '1123598821738675201', '1123598813738675201', '2019-05-26 11:20:52', '1123598821738675201', '2019-05-27 08:34:55', '2', '0');
INSERT INTO `blade_oss` VALUES ('1132487155981393922', '000000', '2', 'qiniu', 'http://ps458elcs.bkt.clouddn.com', 'N_Loh1ngBqcJovwiAJqR91Ifj2vgOWHOf8AwBA_h', 'AuzuA1KHAbkIndCU0dB3Zfii2O3crHNODDmpxHRS', 'bladex', '', '', '', '1123598821738675201', '1123598813738675201', '2019-05-26 11:22:33', '1123598821738675201', '2019-05-26 23:27:56', '1', '0');

-- ----------------------------
-- Table structure for blade_param
-- ----------------------------
DROP TABLE IF EXISTS `blade_param`;
CREATE TABLE `blade_param` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `param_name` varchar(255) DEFAULT NULL COMMENT '参数名',
  `param_key` varchar(255) DEFAULT NULL COMMENT '参数键',
  `param_value` varchar(255) DEFAULT NULL COMMENT '参数值',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `create_user` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_dept` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` char(1) DEFAULT NULL COMMENT '状态',
  `is_deleted` int(2) DEFAULT '0' COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='参数表';

-- ----------------------------
-- Records of blade_param
-- ----------------------------
INSERT INTO `blade_param` VALUES ('1123598819738675201', '是否开启注册功能', 'account.registerUser', 'true', '开启注册', '1123598821738675201', '1123598813738675201', '2018-12-28 12:19:01', '1123598821738675201', '2018-12-28 12:19:01', '1', '0');
INSERT INTO `blade_param` VALUES ('1123598819738675202', '账号初始密码', 'account.initPassword', '123456', '初始密码', '1123598821738675201', '1123598813738675201', '2018-12-28 12:19:01', '1123598821738675201', '2018-12-28 12:19:01', '1', '0');
INSERT INTO `blade_param` VALUES ('1238706101399142402', '租户默认管理密码', 'tenant.default.password', 'admin', null, '1123598821738675201', '1123598813738675201', '2020-03-14 13:58:43', '1123598821738675201', '2020-03-14 13:58:43', '1', '0');
INSERT INTO `blade_param` VALUES ('1238706160295559170', '租户默认账号额度', 'tenant.default.accountNumber', '100', null, '1123598821738675201', '1123598813738675201', '2020-03-14 13:58:57', '1123598821738675201', '2020-03-14 13:58:57', '1', '0');
INSERT INTO `blade_param` VALUES ('1238706330076790786', '租户默认菜单集合', 'tenant.default.menuCode', 'desk,flow,work,monitor,resource,role,user,dept,post,dictbiz,topmenu', null, '1123598821738675201', '1123598813738675201', '2020-03-14 13:59:38', '1123598821738675201', '2020-03-14 13:59:38', '1', '0');

-- ----------------------------
-- Table structure for blade_post
-- ----------------------------
DROP TABLE IF EXISTS `blade_post`;
CREATE TABLE `blade_post` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `tenant_id` varchar(12) DEFAULT '000000' COMMENT '租户ID',
  `category` char(11) DEFAULT NULL COMMENT '岗位类型',
  `post_code` varchar(12) DEFAULT NULL COMMENT '岗位编号',
  `post_name` varchar(64) DEFAULT NULL COMMENT '岗位名称',
  `sort` int(2) DEFAULT NULL COMMENT '岗位排序',
  `remark` varchar(255) DEFAULT NULL COMMENT '岗位描述',
  `create_user` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_dept` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` char(1) DEFAULT NULL COMMENT '状态',
  `is_deleted` int(2) DEFAULT NULL COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='岗位表';

-- ----------------------------
-- Records of blade_post
-- ----------------------------
INSERT INTO `blade_post` VALUES ('12b58a865b7457488b59f87e2fff6c67', '000000', '1', 'cfo', '首席财务官', '90', '', null, null, '2020-05-20 14:29:00', null, '2020-05-20 14:29:00', '1', null);
INSERT INTO `blade_post` VALUES ('4a91f0aaa260049a010959ff60efc41b', '000000', '1', 'coo', '首席运营官', '80', '', null, null, '2020-05-20 14:28:35', null, '2020-05-20 14:28:35', '1', null);
INSERT INTO `blade_post` VALUES ('9c63517249e8c472ec72449f84b62b31', '000000', '3', 'staff', '普通员工', '30', '', null, null, '2020-05-20 14:34:40', null, '2020-05-20 14:34:40', '1', null);
INSERT INTO `blade_post` VALUES ('a6b0473152154a28383a537f122cf6ce', '000000', '2', 'hrn', '人力经理', '40', '', null, null, '2020-05-20 14:34:27', null, '2020-05-20 14:34:27', '1', null);
INSERT INTO `blade_post` VALUES ('c3c593bb429b09623c2afce18c9e6cd5', '000000', '2', 'pm', '技术经理', '50', '', null, null, '2020-05-20 14:34:11', null, '2020-05-20 14:34:11', '1', null);
INSERT INTO `blade_post` VALUES ('db2dcb2410d423c05840c6f737d230a9', '000000', '1', 'ceo', '首席执行官', '100', '', null, null, '2020-05-20 14:28:18', null, '2020-05-20 14:28:18', '1', null);
INSERT INTO `blade_post` VALUES ('e77bd543b986bb3b0120f24af9551775', '000000', '1', 'cio', '首席信息官', '60', '', null, null, '2020-05-20 14:33:52', null, '2020-05-20 14:33:52', '1', null);
INSERT INTO `blade_post` VALUES ('f45cb799f89039d87d0aa9e522b38a4f', '000000', '1', 'cto', '首席技术官', '70', '', null, null, '2020-05-20 14:29:15', null, '2020-05-20 14:29:15', '1', null);

-- ----------------------------
-- Table structure for blade_process_leave
-- ----------------------------
DROP TABLE IF EXISTS `blade_process_leave`;
CREATE TABLE `blade_process_leave` (
  `id` varchar(64) NOT NULL COMMENT '编号',
  `process_definition_id` varchar(64) DEFAULT NULL COMMENT '流程定义主键',
  `process_instance_id` varchar(64) DEFAULT NULL COMMENT '流程实例主键',
  `start_time` datetime DEFAULT NULL COMMENT '开始时间',
  `end_time` datetime DEFAULT NULL COMMENT '结束时间',
  `reason` varchar(255) DEFAULT NULL COMMENT '请假理由',
  `task_user` varchar(255) DEFAULT NULL COMMENT '第一级审批人',
  `apply_time` datetime DEFAULT NULL COMMENT '申请时间',
  `create_user` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_dept` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` char(1) DEFAULT NULL COMMENT '状态',
  `is_deleted` int(2) DEFAULT NULL COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程请假业务表';

-- ----------------------------
-- Records of blade_process_leave
-- ----------------------------

-- ----------------------------
-- Table structure for blade_role
-- ----------------------------
DROP TABLE IF EXISTS `blade_role`;
CREATE TABLE `blade_role` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `tenant_id` varchar(12) DEFAULT '000000' COMMENT '租户ID',
  `parent_id` varchar(64) DEFAULT '0' COMMENT '父主键',
  `role_name` varchar(255) DEFAULT NULL COMMENT '角色名',
  `sort` int(11) DEFAULT NULL COMMENT '排序',
  `role_alias` varchar(255) DEFAULT NULL COMMENT '角色别名',
  `status` char(2) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT '0' COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='角色表';

-- ----------------------------
-- Records of blade_role
-- ----------------------------
INSERT INTO `blade_role` VALUES ('1123598816738675201', 'YYZX', '0', '超级管理员', '100', 'administrator', '1', '0');
INSERT INTO `blade_role` VALUES ('1123598816738675202', 'YHD', '0', '用户', '80', 'user', '1', '0');
INSERT INTO `blade_role` VALUES ('1123598816738675203', 'YHD', '1123598816738675202', '人事', '80', 'hr', '1', '0');
INSERT INTO `blade_role` VALUES ('1123598816738675204', 'YHD', '1123598816738675202', '经理', '80', 'manager', '1', '0');
INSERT INTO `blade_role` VALUES ('1123598816738675205', 'YHD', '1123598816738675202', '老板', '80', 'boss', '1', '0');

-- ----------------------------
-- Table structure for blade_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `blade_role_menu`;
CREATE TABLE `blade_role_menu` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `menu_id` varchar(64) DEFAULT NULL COMMENT '菜单id',
  `role_id` varchar(64) DEFAULT NULL COMMENT '角色id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='角色菜单关联表';

-- ----------------------------
-- Records of blade_role_menu
-- ----------------------------
INSERT INTO `blade_role_menu` VALUES ('1123598817738675363', '1123598815738675201', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675364', '1123598815738675202', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675365', '1123598815738675219', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675366', '1123598815738675220', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675367', '1123598815738675221', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675368', '1123598815738675222', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675369', '1123598815738675280', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675370', '1123598815738675281', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675371', '1123598815738675282', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675372', '1123598815738675283', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675373', '1123598815738675284', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675374', '1123598815738675285', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675375', '1123598815738675286', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675376', '1123598815738675287', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675377', '1123598815738675288', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675378', '1123598815738675289', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675379', '1123598815738675290', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675380', '1123598815738675291', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675381', '1123598815738675292', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675382', '1123598815738675293', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675383', '1123598815738675294', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675384', '1123598815738675295', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675385', '1123598815738675296', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675386', '1123598815738675297', '1123598816738675202');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675387', '1123598815738675201', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675388', '1123598815738675202', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675389', '1123598815738675219', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675390', '1123598815738675220', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675391', '1123598815738675221', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675392', '1123598815738675222', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675393', '1123598815738675280', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675394', '1123598815738675281', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675395', '1123598815738675282', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675396', '1123598815738675283', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675397', '1123598815738675284', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675398', '1123598815738675285', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675399', '1123598815738675286', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675400', '1123598815738675287', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675401', '1123598815738675288', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675402', '1123598815738675289', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675403', '1123598815738675290', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675404', '1123598815738675291', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675405', '1123598815738675292', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675406', '1123598815738675293', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675407', '1123598815738675294', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675408', '1123598815738675295', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675409', '1123598815738675296', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675410', '1123598815738675297', '1123598816738675203');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675411', '1123598815738675201', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675412', '1123598815738675202', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675413', '1123598815738675219', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675414', '1123598815738675220', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675415', '1123598815738675221', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675416', '1123598815738675222', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675417', '1123598815738675280', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675418', '1123598815738675281', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675419', '1123598815738675282', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675420', '1123598815738675283', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675421', '1123598815738675284', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675422', '1123598815738675285', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675423', '1123598815738675286', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675424', '1123598815738675287', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675425', '1123598815738675288', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675426', '1123598815738675289', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675427', '1123598815738675290', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675428', '1123598815738675291', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675429', '1123598815738675292', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675430', '1123598815738675293', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675431', '1123598815738675294', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675432', '1123598815738675295', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675433', '1123598815738675296', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675434', '1123598815738675297', '1123598816738675204');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675435', '1123598815738675201', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675436', '1123598815738675202', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675437', '1123598815738675219', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675438', '1123598815738675220', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675439', '1123598815738675221', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675440', '1123598815738675222', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675441', '1123598815738675280', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675442', '1123598815738675281', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675443', '1123598815738675282', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675444', '1123598815738675283', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675445', '1123598815738675284', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675446', '1123598815738675285', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675447', '1123598815738675286', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675448', '1123598815738675287', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675449', '1123598815738675288', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675450', '1123598815738675289', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675451', '1123598815738675290', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675452', '1123598815738675291', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675453', '1123598815738675292', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675454', '1123598815738675293', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675455', '1123598815738675294', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675456', '1123598815738675295', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675457', '1123598815738675296', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1123598817738675458', '1123598815738675297', '1123598816738675205');
INSERT INTO `blade_role_menu` VALUES ('1149888292426575874', '1123598815738675201', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292476907522', '1123598815738675202', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292489490433', '1123598815738675219', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292502073345', '1123598815738675220', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292518850561', '1123598815738675221', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292535627777', '1123598815738675222', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292548210690', '1123598815738675280', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292560793602', '1123598815738675281', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292577570817', '1123598815738675282', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292594348033', '1123598815738675283', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292611125249', '1123598815738675284', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292623708162', '1123598815738675285', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292640485377', '1123598815738675286', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292653068289', '1123598815738675287', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292669845506', '1123598815738675288', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292682428417', '1123598815738675289', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292699205634', '1123598815738675290', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292711788545', '1123598815738675291', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292724371458', '1123598815738675292', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292741148674', '1123598815738675293', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292753731585', '1123598815738675294', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292766314497', '1123598815738675295', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292778897410', '1123598815738675296', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292791480321', '1123598815738675297', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292808257537', '1123598815738675210', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292820840449', '1123598815738675211', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292833423362', '1123598815738675212', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292846006274', '1123598815738675213', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292862783489', '1123598815738675214', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292875366401', '1123598815738675249', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292887949313', '1123598815738675215', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292904726530', '1123598815738675250', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292917309442', '1123598815738675216', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292929892353', '1123598815738675251', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292942475265', '1123598815738675217', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292959252482', '1123598815738675218', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292971835393', '1123598815738675252', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292984418306', '1123598815738675253', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888292997001217', '1123598815738675254', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293009584129', '1123598815738675255', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293026361346', '1123598815738675266', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293043138562', '1123598815738675267', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293055721473', '1123598815738675268', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293072498690', '1123598815738675269', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293089275906', '1123598815738675270', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293101858817', '1123598815738675271', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293114441729', '1123598815738675272', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293127024642', '1123598815738675273', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293139607554', '1123598815738675274', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293152190465', '1123598815738675275', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293164773377', '1123598815738675276', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293177356290', '1123598815738675277', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293189939201', '1123598815738675278', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293202522113', '1123598815738675279', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293215105026', '1123598815738675298', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293227687938', '1123598815738675299', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293240270850', '1123598815738675301', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293252853762', '1123598815738675302', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293265436674', '1123598815738675303', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293278019586', '1123598815738675304', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293290602497', '1123598815738675305', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293303185410', '1123598815738675307', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293315768322', '1123598815738675308', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293328351234', '1123598815738675241', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293336739841', '1123598815738675242', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293349322753', '1123598815738675243', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293361905666', '1123598815738675244', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293374488578', '1123598815738675309', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293387071489', '1123598815738675310', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293399654402', '1123598815738675311', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293412237313', '1123598815738675312', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293424820226', '1123598815738675203', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293454180354', '1123598815738675204', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293483540481', '1123598815738675223', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293512900609', '1123598815738675224', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293529677826', '1123598815738675225', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293554843649', '1123598815738675226', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293571620866', '1123598815738675227', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293588398081', '1123598815738675228', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293605175297', '1123598815738675205', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293617758209', '1123598815738675229', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293630341121', '1123598815738675230', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293642924033', '1123598815738675231', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293659701250', '1123598815738675232', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293672284162', '1123598815738675206', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293684867074', '1123598815738675233', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293697449986', '1123598815738675234', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293710032897', '1123598815738675235', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293722615809', '1123598815738675236', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293735198722', '1123598815738675207', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293747781633', '1123598815738675237', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293760364545', '1123598815738675238', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293772947458', '1123598815738675239', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293785530370', '1123598815738675240', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293798113282', '1123598815738675306', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293810696194', '1123598815738675208', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293819084802', '1123598815738675313', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293831667714', '1123598815738675314', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293844250626', '1123598815738675315', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293856833538', '1123598815738675316', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293856833539', '1123598815738675317', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293869416450', '1123598815738675209', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293881999362', '1123598815738675245', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293894582274', '1123598815738675246', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293907165186', '1123598815738675247', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293919748097', '1123598815738675248', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293932331010', '1123598815738675256', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293940719618', '1123598815738675257', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293953302530', '1123598815738675258', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293965885441', '1123598815738675259', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293978468354', '1123598815738675260', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293986856962', '1123598815738675261', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888293999439874', '1123598815738675262', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888294007828482', '1123598815738675263', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888294020411393', '1123598815738675264', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1149888294028800002', '1123598815738675265', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272593873322991', '1161272593873321991', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272593873322992', '1161272593873321992', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272593873322993', '1161272593873321993', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272593873322994', '1161272593873321994', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272593873322995', '1161272593873321995', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272593873322996', '1164733121140551682', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272593873322997', '1164733349637844993', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272693873322991', '1164733369658963251', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272693873322992', '1164733369658963252', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272693873322993', '1164733369658963253', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272693873322994', '1164733369658963254', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272693873322995', '1164733369658963255', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272793873322991', '1164733379658963251', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272793873322992', '116473337658963252', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272793873322993', '1164733379658963253', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272793873322994', '1164733379658963254', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272793873322995', '1164733379658963255', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272893873222991', '1164733389658962251', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272893873222992', '1164733389658962252', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272893873222993', '1164733389658962253', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272893873222994', '1164733389658962254', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272893873222995', '1164733389658962255', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272893873222996', '1164733389658962256', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272893873322991', '1164733389658963251', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272893875225001', '1164733389668962251', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272893875225002', '1164733389668962252', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272893875225003', '1164733389668962253', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272893875225004', '1164733389668962254', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272893875225005', '1164733389668962255', '1123598816738675201');
INSERT INTO `blade_role_menu` VALUES ('1161272893875225006', '1164733389668962256', '1123598816738675201');

-- ----------------------------
-- Table structure for blade_role_scope
-- ----------------------------
DROP TABLE IF EXISTS `blade_role_scope`;
CREATE TABLE `blade_role_scope` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `scope_category` int(2) DEFAULT NULL COMMENT '权限类型(1:数据权限、2:接口权限)',
  `scope_id` varchar(64) DEFAULT NULL COMMENT '权限id',
  `role_id` varchar(64) DEFAULT NULL COMMENT '角色id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='角色数据权限关联表';

-- ----------------------------
-- Records of blade_role_scope
-- ----------------------------

-- ----------------------------
-- Table structure for blade_scope_api
-- ----------------------------
DROP TABLE IF EXISTS `blade_scope_api`;
CREATE TABLE `blade_scope_api` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `menu_id` varchar(64) DEFAULT NULL COMMENT '菜单主键',
  `resource_code` varchar(255) DEFAULT NULL COMMENT '资源编号',
  `scope_name` varchar(255) DEFAULT NULL COMMENT '接口权限名',
  `scope_path` varchar(255) DEFAULT NULL COMMENT '接口权限地址',
  `scope_type` int(2) DEFAULT NULL COMMENT '接口权限类型',
  `remark` varchar(255) DEFAULT NULL COMMENT '接口权限备注',
  `create_user` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_dept` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` char(1) DEFAULT NULL COMMENT '状态',
  `is_deleted` int(2) DEFAULT NULL COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='接口权限表';

-- ----------------------------
-- Records of blade_scope_api
-- ----------------------------

-- ----------------------------
-- Table structure for blade_scope_data
-- ----------------------------
DROP TABLE IF EXISTS `blade_scope_data`;
CREATE TABLE `blade_scope_data` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `menu_id` varchar(64) DEFAULT NULL COMMENT '菜单主键',
  `resource_code` varchar(255) DEFAULT NULL COMMENT '资源编号',
  `scope_name` varchar(255) DEFAULT NULL COMMENT '数据权限名称',
  `scope_field` varchar(255) DEFAULT NULL COMMENT '数据权限字段',
  `scope_class` varchar(500) DEFAULT NULL COMMENT '数据权限类名',
  `scope_column` varchar(255) DEFAULT NULL COMMENT '数据权限字段',
  `scope_type` int(2) DEFAULT NULL COMMENT '数据权限类型',
  `scope_value` varchar(2000) DEFAULT NULL COMMENT '数据权限值域',
  `remark` varchar(255) DEFAULT NULL COMMENT '数据权限备注',
  `create_user` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_dept` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` char(1) DEFAULT NULL COMMENT '状态',
  `is_deleted` int(2) DEFAULT NULL COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='数据权限表';

-- ----------------------------
-- Records of blade_scope_data
-- ----------------------------

-- ----------------------------
-- Table structure for blade_sms
-- ----------------------------
DROP TABLE IF EXISTS `blade_sms`;
CREATE TABLE `blade_sms` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `tenant_id` varchar(12) DEFAULT '000000' COMMENT '租户ID',
  `category` int(2) DEFAULT NULL COMMENT '分类',
  `sms_code` varchar(32) DEFAULT NULL COMMENT '资源编号',
  `template_id` varchar(64) DEFAULT NULL COMMENT '模板ID',
  `access_key` varchar(255) DEFAULT NULL COMMENT 'accessKey',
  `secret_key` varchar(255) DEFAULT NULL COMMENT 'secretKey',
  `region_id` varchar(255) DEFAULT NULL COMMENT 'regionId',
  `sign_name` varchar(64) DEFAULT NULL COMMENT '短信签名',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `create_user` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_dept` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` char(1) DEFAULT NULL COMMENT '状态',
  `is_deleted` int(2) DEFAULT '0' COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='短信配置表';

-- ----------------------------
-- Records of blade_sms
-- ----------------------------

-- ----------------------------
-- Table structure for blade_tenant
-- ----------------------------
DROP TABLE IF EXISTS `blade_tenant`;
CREATE TABLE `blade_tenant` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `tenant_id` varchar(12) DEFAULT '000000' COMMENT '租户ID',
  `tenant_name` varchar(50) NOT NULL COMMENT '租户名称',
  `domain` varchar(255) DEFAULT NULL COMMENT '域名地址',
  `background_url` varchar(1000) DEFAULT NULL COMMENT '系统背景',
  `linkman` varchar(20) DEFAULT NULL COMMENT '联系人',
  `contact_number` varchar(20) DEFAULT NULL COMMENT '联系电话',
  `address` varchar(255) DEFAULT NULL COMMENT '联系地址',
  `account_number` int(11) DEFAULT '-1' COMMENT '账号额度',
  `expire_time` datetime DEFAULT NULL COMMENT '过期时间',
  `create_user` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_dept` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` char(1) DEFAULT NULL COMMENT '状态',
  `is_deleted` int(2) DEFAULT '0' COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='租户表';

-- ----------------------------
-- Records of blade_tenant
-- ----------------------------
INSERT INTO `blade_tenant` VALUES ('2d7c0f696d1865fc03e425bb3ed00f0e', 'YHD', '租户1号店', '', '', '李四', '', '', '3000000', '2020-05-30 00:00:00', null, null, '2020-05-17 09:34:29', null, '2020-05-17 09:34:29', '1', '0');
INSERT INTO `blade_tenant` VALUES ('78f5142f69314691a6720667600ab1c2', 'EHD', '租户2号店', '', '', '王五', '', '', '4000000', '2020-05-17 09:35:43', null, null, '2020-05-17 09:35:46', null, '2020-05-17 09:35:46', '0', '0');
INSERT INTO `blade_tenant` VALUES ('f21e2af4744994afb05157554c7e58d9', 'YYZX', '运营中心', 'http://www.baidu.com', '', '张三', '88888888', '上海市黄浦区第一大道', '20000000', '2020-06-06 00:00:00', null, null, '2020-05-17 09:31:44', null, '2020-05-17 09:31:44', '1', '0');

-- ----------------------------
-- Table structure for blade_user
-- ----------------------------
DROP TABLE IF EXISTS `blade_user`;
CREATE TABLE `blade_user` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `tenant_id` varchar(12) DEFAULT '000000' COMMENT '租户ID',
  `code` varchar(12) DEFAULT NULL COMMENT '用户编号',
  `account` varchar(45) DEFAULT NULL COMMENT '账号',
  `password` varchar(45) DEFAULT NULL COMMENT '密码',
  `name` varchar(20) DEFAULT NULL COMMENT '昵称',
  `real_name` varchar(10) DEFAULT NULL COMMENT '真名',
  `avatar` varchar(500) DEFAULT NULL COMMENT '头像',
  `email` varchar(45) DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(45) DEFAULT NULL COMMENT '手机',
  `birthday` datetime DEFAULT NULL COMMENT '生日',
  `sex` smallint(6) DEFAULT NULL COMMENT '性别',
  `role_id` varchar(1000) DEFAULT NULL COMMENT '角色id',
  `dept_id` varchar(1000) DEFAULT NULL COMMENT '部门id',
  `post_id` varchar(1000) DEFAULT NULL COMMENT '岗位id',
  `create_user` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_dept` varchar(64) DEFAULT NULL COMMENT '创建部门',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` bigint(64) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `status` char(1) DEFAULT NULL COMMENT '状态',
  `is_deleted` int(2) DEFAULT '0' COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

-- ----------------------------
-- Records of blade_user
-- ----------------------------
INSERT INTO `blade_user` VALUES ('1123598821738675201', '000000', null, 'admin', 'e10adc3949ba59abbe56e057f20f883e', '管理员', '管理员', '/upload/avatar/1589941896547.jpg', 'admin@bladex.vip', '123333333333', '2018-08-08 00:00:00', '1', '1123598816738675201', 'SD', 'db2dcb2410d423c05840c6f737d230a9', '1123598821738675201', '1123598813738675201', '2018-08-08 00:00:00', '1123598821738675201', '2018-08-08 00:00:00', '1', '0');
INSERT INTO `blade_user` VALUES ('1123598821738675202', '000000', null, 'hr', '5e79b90f7bba52d54115f086e48f539016a27ec6', '人事', '人事', '', 'hr@bladex.vip', '123333333333', '2018-08-08 00:00:00', '2', '1123598816738675203', 'SDJN', 'a6b0473152154a28383a537f122cf6ce', '1123598821738675201', '1123598813738675201', '2019-04-27 17:03:10', '1123598821738675201', '2019-04-27 17:03:10', '1', '0');
INSERT INTO `blade_user` VALUES ('1123598821738675203', '000000', null, 'manager', 'dfbaa3b61caa3a319f463cc165085aa8c822d2ce', '经理', '经理', '', 'manager@bladex.vip', '123333333333', '2018-08-08 00:00:00', '1', '1123598816738675204', 'SDJN01', 'c3c593bb429b09623c2afce18c9e6cd5', '1123598821738675201', '1123598813738675201', '2019-04-27 17:03:38', '1123598821738675201', '2019-04-27 17:03:38', '1', '0');
INSERT INTO `blade_user` VALUES ('1123598821738675204', '000000', null, 'boss', 'abe57d23e18f7ad8ea99c86e430c90a05119a9d3', '老板', '老板', '', 'boss@bladex.vip', '123333333333', '2018-08-08 00:00:00', '1', '1123598816738675205', 'SD', '12b58a865b7457488b59f87e2fff6c67', '1123598821738675201', '1123598813738675201', '2019-04-27 17:03:55', '1123598821738675201', '2019-04-27 17:03:55', '1', '0');
INSERT INTO `blade_user` VALUES ('53f04c6898462888b4d96eff870d3842', '000000', null, 'zhangsan', 'e10adc3949ba59abbe56e057f20f883e', '托马斯', '张三', '/upload/avatar/1589940775336.jpeg', '18228@qq.com', '17721033713', '2020-05-11 00:00:00', '1', '', '', '', 'admin', null, '2020-05-20 10:12:57', null, '2020-05-20 10:12:57', '1', '0');

-- ----------------------------
-- Table structure for blade_user_dept
-- ----------------------------
DROP TABLE IF EXISTS `blade_user_dept`;
CREATE TABLE `blade_user_dept` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `user_id` varchar(64) DEFAULT '0' COMMENT '用户ID',
  `dept_id` varchar(64) DEFAULT '0' COMMENT '部门ID',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户部门表';

-- ----------------------------
-- Records of blade_user_dept
-- ----------------------------
INSERT INTO `blade_user_dept` VALUES ('1203503640757788674', '1123598821738675201', '1123598813738675201');
INSERT INTO `blade_user_dept` VALUES ('1203503653323923458', '1123598821738675202', '1123598813738675202');
INSERT INTO `blade_user_dept` VALUES ('1203503663402835969', '1123598821738675203', '1123598813738675202');
INSERT INTO `blade_user_dept` VALUES ('1203503672911323137', '1123598821738675204', '1123598813738675202');
