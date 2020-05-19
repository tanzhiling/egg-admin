/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50727
Source Host           : localhost:3306
Source Database       : blade

Target Server Type    : MYSQL
Target Server Version : 50727
File Encoding         : 65001

Date: 2020-05-19 17:43:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for blade_client
-- ----------------------------
DROP TABLE IF EXISTS `blade_client`;
CREATE TABLE `blade_client` (
  `id` varchar(64) NOT NULL,
  `client_id` varchar(48) NOT NULL,
  `client_secret` varchar(256) NOT NULL,
  `resource_ids` varchar(256) DEFAULT NULL,
  `scope` varchar(256) NOT NULL,
  `authorized_grant_types` varchar(256) NOT NULL,
  `web_server_redirect_uri` varchar(256) DEFAULT NULL,
  `authorities` varchar(256) DEFAULT NULL,
  `access_token_validity` int(11) NOT NULL,
  `refresh_token_validity` int(11) NOT NULL,
  `additional_information` varchar(4096) DEFAULT NULL,
  `autoapprove` varchar(256) DEFAULT NULL,
  `create_user` varchar(64) DEFAULT NULL,
  `create_dept` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_user` varchar(64) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `status` char(1) NOT NULL,
  `is_deleted` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_client
-- ----------------------------

-- ----------------------------
-- Table structure for blade_code
-- ----------------------------
DROP TABLE IF EXISTS `blade_code`;
CREATE TABLE `blade_code` (
  `id` varchar(64) NOT NULL,
  `datasource_id` varchar(64) DEFAULT NULL,
  `service_name` varchar(64) DEFAULT NULL,
  `code_name` varchar(64) DEFAULT NULL,
  `table_name` varchar(64) DEFAULT NULL,
  `table_prefix` varchar(64) DEFAULT NULL,
  `pk_name` varchar(32) DEFAULT NULL,
  `package_name` varchar(500) DEFAULT NULL,
  `base_mode` int(2) DEFAULT NULL,
  `wrap_mode` int(2) DEFAULT NULL,
  `api_path` varchar(2000) DEFAULT NULL,
  `web_path` varchar(2000) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_code
-- ----------------------------

-- ----------------------------
-- Table structure for blade_datasource
-- ----------------------------
DROP TABLE IF EXISTS `blade_datasource`;
CREATE TABLE `blade_datasource` (
  `id` varchar(64) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `driver_class` varchar(100) DEFAULT NULL,
  `url` varchar(500) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `create_user` varchar(64) DEFAULT NULL,
  `create_dept` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_user` varchar(64) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_datasource
-- ----------------------------

-- ----------------------------
-- Table structure for blade_dept
-- ----------------------------
DROP TABLE IF EXISTS `blade_dept`;
CREATE TABLE `blade_dept` (
  `id` varchar(64) NOT NULL,
  `tenant_id` varchar(12) DEFAULT '000000',
  `parent_id` varchar(64) DEFAULT '0',
  `parent_ids` varchar(2000) DEFAULT '0,',
  `dept_category` int(2) DEFAULT NULL,
  `dept_name` varchar(45) DEFAULT NULL,
  `full_name` varchar(45) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_dept
-- ----------------------------

-- ----------------------------
-- Table structure for blade_dict_data
-- ----------------------------
DROP TABLE IF EXISTS `blade_dict_data`;
CREATE TABLE `blade_dict_data` (
  `id` varchar(64) NOT NULL,
  `sort` decimal(10,0) NOT NULL,
  `dict_label` varchar(100) NOT NULL,
  `dict_value` varchar(100) NOT NULL,
  `dict_type` varchar(100) NOT NULL,
  `status` char(1) NOT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  `remarks` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_dict_data
-- ----------------------------

-- ----------------------------
-- Table structure for blade_dict_type
-- ----------------------------
DROP TABLE IF EXISTS `blade_dict_type`;
CREATE TABLE `blade_dict_type` (
  `id` varchar(64) NOT NULL,
  `sort` decimal(10,0) NOT NULL,
  `dict_name` varchar(100) NOT NULL,
  `dict_type` varchar(100) NOT NULL,
  `status` char(1) NOT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  `remarks` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_dict_type
-- ----------------------------

-- ----------------------------
-- Table structure for blade_log_api
-- ----------------------------
DROP TABLE IF EXISTS `blade_log_api`;
CREATE TABLE `blade_log_api` (
  `id` varchar(64) NOT NULL,
  `tenant_id` varchar(12) DEFAULT '000000',
  `service_id` varchar(32) DEFAULT NULL,
  `server_host` varchar(255) DEFAULT NULL,
  `server_ip` varchar(255) DEFAULT NULL,
  `env` varchar(255) DEFAULT NULL,
  `type` char(1) DEFAULT '1',
  `title` varchar(255) DEFAULT '',
  `method` varchar(10) DEFAULT NULL,
  `request_uri` varchar(255) DEFAULT NULL,
  `user_agent` varchar(1000) DEFAULT NULL,
  `remote_ip` varchar(255) DEFAULT NULL,
  `method_class` varchar(255) DEFAULT NULL,
  `method_name` varchar(255) DEFAULT NULL,
  `params` text,
  `time` varchar(64) DEFAULT NULL,
  `create_by` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_log_api
-- ----------------------------

-- ----------------------------
-- Table structure for blade_log_error
-- ----------------------------
DROP TABLE IF EXISTS `blade_log_error`;
CREATE TABLE `blade_log_error` (
  `id` varchar(64) NOT NULL,
  `tenant_id` varchar(12) DEFAULT '000000',
  `service_id` varchar(32) DEFAULT NULL,
  `server_host` varchar(255) DEFAULT NULL,
  `server_ip` varchar(255) DEFAULT NULL,
  `env` varchar(255) DEFAULT NULL,
  `method` varchar(10) DEFAULT NULL,
  `request_uri` varchar(255) DEFAULT NULL,
  `user_agent` varchar(1000) DEFAULT NULL,
  `stack_trace` text,
  `exception_name` varchar(255) DEFAULT NULL,
  `message` text,
  `line_number` int(11) DEFAULT NULL,
  `remote_ip` varchar(255) DEFAULT NULL,
  `method_class` varchar(255) DEFAULT NULL,
  `file_name` varchar(1000) DEFAULT NULL,
  `method_name` varchar(255) DEFAULT NULL,
  `params` text,
  `create_by` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_log_error
-- ----------------------------

-- ----------------------------
-- Table structure for blade_log_usual
-- ----------------------------
DROP TABLE IF EXISTS `blade_log_usual`;
CREATE TABLE `blade_log_usual` (
  `id` varchar(64) NOT NULL,
  `tenant_id` varchar(12) DEFAULT '000000',
  `service_id` varchar(32) DEFAULT NULL,
  `server_host` varchar(255) DEFAULT NULL,
  `server_ip` varchar(255) DEFAULT NULL,
  `env` varchar(255) DEFAULT NULL,
  `log_level` varchar(10) DEFAULT NULL,
  `log_id` varchar(100) DEFAULT NULL,
  `log_data` text,
  `method` varchar(10) DEFAULT NULL,
  `request_uri` varchar(255) DEFAULT NULL,
  `remote_ip` varchar(255) DEFAULT NULL,
  `method_class` varchar(255) DEFAULT NULL,
  `method_name` varchar(255) DEFAULT NULL,
  `user_agent` varchar(1000) DEFAULT NULL,
  `params` text,
  `create_by` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_log_usual
-- ----------------------------

-- ----------------------------
-- Table structure for blade_menu
-- ----------------------------
DROP TABLE IF EXISTS `blade_menu`;
CREATE TABLE `blade_menu` (
  `id` varchar(64) NOT NULL,
  `parent_id` varchar(64) DEFAULT '0',
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `alias` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `sort` int(2) DEFAULT NULL,
  `category` int(2) DEFAULT NULL,
  `action` int(2) DEFAULT '0',
  `is_open` int(2) DEFAULT '1',
  `remark` varchar(255) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_menu
-- ----------------------------

-- ----------------------------
-- Table structure for blade_notice
-- ----------------------------
DROP TABLE IF EXISTS `blade_notice`;
CREATE TABLE `blade_notice` (
  `id` varchar(64) NOT NULL,
  `tenant_id` varchar(12) DEFAULT '000000',
  `title` varchar(255) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `release_time` datetime DEFAULT NULL,
  `content` varchar(2000) DEFAULT NULL,
  `create_user` varchar(64) DEFAULT NULL,
  `create_dept` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_user` varchar(64) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_notice
-- ----------------------------

-- ----------------------------
-- Table structure for blade_oss
-- ----------------------------
DROP TABLE IF EXISTS `blade_oss`;
CREATE TABLE `blade_oss` (
  `id` varchar(64) NOT NULL,
  `tenant_id` varchar(12) DEFAULT '000000',
  `category` int(2) DEFAULT NULL,
  `oss_code` varchar(32) DEFAULT NULL,
  `endpoint` varchar(255) DEFAULT NULL,
  `access_key` varchar(255) DEFAULT NULL,
  `secret_key` varchar(255) DEFAULT NULL,
  `bucket_name` varchar(255) DEFAULT NULL,
  `app_id` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `create_user` varchar(64) DEFAULT NULL,
  `create_dept` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_user` varchar(64) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_oss
-- ----------------------------

-- ----------------------------
-- Table structure for blade_param
-- ----------------------------
DROP TABLE IF EXISTS `blade_param`;
CREATE TABLE `blade_param` (
  `id` varchar(64) NOT NULL,
  `param_name` varchar(255) DEFAULT NULL,
  `param_key` varchar(255) DEFAULT NULL,
  `param_value` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `create_user` varchar(64) DEFAULT NULL,
  `create_dept` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_user` varchar(64) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_param
-- ----------------------------

-- ----------------------------
-- Table structure for blade_post
-- ----------------------------
DROP TABLE IF EXISTS `blade_post`;
CREATE TABLE `blade_post` (
  `id` varchar(64) NOT NULL,
  `tenant_id` varchar(12) DEFAULT '000000',
  `category` int(11) DEFAULT NULL,
  `post_code` varchar(12) DEFAULT NULL,
  `post_name` varchar(64) DEFAULT NULL,
  `sort` int(2) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `create_user` varchar(64) DEFAULT NULL,
  `create_dept` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_user` varchar(64) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_post
-- ----------------------------

-- ----------------------------
-- Table structure for blade_process_leave
-- ----------------------------
DROP TABLE IF EXISTS `blade_process_leave`;
CREATE TABLE `blade_process_leave` (
  `id` varchar(64) NOT NULL,
  `process_definition_id` varchar(64) DEFAULT NULL,
  `process_instance_id` varchar(64) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `task_user` varchar(255) DEFAULT NULL,
  `apply_time` datetime DEFAULT NULL,
  `create_user` varchar(64) DEFAULT NULL,
  `create_dept` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_user` varchar(64) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_process_leave
-- ----------------------------

-- ----------------------------
-- Table structure for blade_role
-- ----------------------------
DROP TABLE IF EXISTS `blade_role`;
CREATE TABLE `blade_role` (
  `id` varchar(64) NOT NULL,
  `tenant_id` varchar(12) DEFAULT '000000',
  `parent_id` varchar(64) DEFAULT '0',
  `role_name` varchar(255) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `role_alias` varchar(255) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_role
-- ----------------------------

-- ----------------------------
-- Table structure for blade_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `blade_role_menu`;
CREATE TABLE `blade_role_menu` (
  `id` varchar(64) NOT NULL,
  `menu_id` varchar(64) DEFAULT NULL,
  `role_id` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_role_menu
-- ----------------------------

-- ----------------------------
-- Table structure for blade_role_scope
-- ----------------------------
DROP TABLE IF EXISTS `blade_role_scope`;
CREATE TABLE `blade_role_scope` (
  `id` varchar(64) NOT NULL,
  `scope_category` int(2) DEFAULT NULL,
  `scope_id` varchar(64) DEFAULT NULL,
  `role_id` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_role_scope
-- ----------------------------

-- ----------------------------
-- Table structure for blade_scope_api
-- ----------------------------
DROP TABLE IF EXISTS `blade_scope_api`;
CREATE TABLE `blade_scope_api` (
  `id` varchar(64) NOT NULL,
  `menu_id` varchar(64) DEFAULT NULL,
  `resource_code` varchar(255) DEFAULT NULL,
  `scope_name` varchar(255) DEFAULT NULL,
  `scope_path` varchar(255) DEFAULT NULL,
  `scope_type` int(2) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `create_user` varchar(64) DEFAULT NULL,
  `create_dept` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_user` varchar(64) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_scope_api
-- ----------------------------

-- ----------------------------
-- Table structure for blade_scope_data
-- ----------------------------
DROP TABLE IF EXISTS `blade_scope_data`;
CREATE TABLE `blade_scope_data` (
  `id` varchar(64) NOT NULL,
  `menu_id` varchar(64) DEFAULT NULL,
  `resource_code` varchar(255) DEFAULT NULL,
  `scope_name` varchar(255) DEFAULT NULL,
  `scope_field` varchar(255) DEFAULT NULL,
  `scope_class` varchar(500) DEFAULT NULL,
  `scope_column` varchar(255) DEFAULT NULL,
  `scope_type` int(2) DEFAULT NULL,
  `scope_value` varchar(2000) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `create_user` varchar(64) DEFAULT NULL,
  `create_dept` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_user` varchar(64) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_scope_data
-- ----------------------------

-- ----------------------------
-- Table structure for blade_sms
-- ----------------------------
DROP TABLE IF EXISTS `blade_sms`;
CREATE TABLE `blade_sms` (
  `id` varchar(64) NOT NULL,
  `tenant_id` varchar(12) DEFAULT '000000',
  `category` int(2) DEFAULT NULL,
  `sms_code` varchar(32) DEFAULT NULL,
  `template_id` varchar(64) DEFAULT NULL,
  `access_key` varchar(255) DEFAULT NULL,
  `secret_key` varchar(255) DEFAULT NULL,
  `region_id` varchar(255) DEFAULT NULL,
  `sign_name` varchar(64) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `create_user` varchar(64) DEFAULT NULL,
  `create_dept` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_user` varchar(64) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_sms
-- ----------------------------

-- ----------------------------
-- Table structure for blade_tenant
-- ----------------------------
DROP TABLE IF EXISTS `blade_tenant`;
CREATE TABLE `blade_tenant` (
  `id` varchar(64) NOT NULL,
  `tenant_id` varchar(12) DEFAULT '000000',
  `tenant_name` varchar(50) NOT NULL,
  `domain` varchar(255) DEFAULT NULL,
  `background_url` varchar(1000) DEFAULT NULL,
  `linkman` varchar(20) DEFAULT NULL,
  `contact_number` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `account_number` int(11) DEFAULT '-1',
  `expire_time` datetime DEFAULT NULL,
  `create_user` varchar(64) DEFAULT NULL,
  `create_dept` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_user` varchar(64) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_tenant
-- ----------------------------

-- ----------------------------
-- Table structure for blade_top_menu
-- ----------------------------
DROP TABLE IF EXISTS `blade_top_menu`;
CREATE TABLE `blade_top_menu` (
  `id` varchar(64) NOT NULL,
  `tenant_id` varchar(12) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `sort` int(2) DEFAULT NULL,
  `create_user` varchar(64) DEFAULT NULL,
  `create_dept` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_user` varchar(64) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `status` char(1) DEFAULT NULL,
  `is_deleted` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_top_menu
-- ----------------------------

-- ----------------------------
-- Table structure for blade_top_menu_setting
-- ----------------------------
DROP TABLE IF EXISTS `blade_top_menu_setting`;
CREATE TABLE `blade_top_menu_setting` (
  `id` varchar(64) NOT NULL,
  `top_menu_id` varchar(64) DEFAULT NULL,
  `menu_id` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_top_menu_setting
-- ----------------------------

-- ----------------------------
-- Table structure for blade_user
-- ----------------------------
DROP TABLE IF EXISTS `blade_user`;
CREATE TABLE `blade_user` (
  `id` varchar(64) NOT NULL,
  `tenant_id` varchar(12) DEFAULT '000000',
  `code` varchar(12) DEFAULT NULL,
  `account` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `real_name` varchar(10) DEFAULT NULL,
  `avatar` varchar(500) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `sex` int(6) DEFAULT NULL,
  `role_id` varchar(1000) DEFAULT NULL,
  `dept_id` varchar(1000) DEFAULT NULL,
  `post_id` varchar(1000) DEFAULT NULL,
  `create_user` varchar(64) DEFAULT NULL,
  `create_dept` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_user` varchar(64) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `status` char(1) DEFAULT '0',
  `is_deleted` int(2) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_user
-- ----------------------------
INSERT INTO `blade_user` VALUES ('e10adc3949ba59abbe56e057f20f883e', '000000', '11', 'admin', 'e10adc3949ba59abbe56e057f20f883e', 'admin', '托马斯', null, null, null, null, null, null, null, null, null, null, null, null, null, '0', '0');

-- ----------------------------
-- Table structure for blade_user_dept
-- ----------------------------
DROP TABLE IF EXISTS `blade_user_dept`;
CREATE TABLE `blade_user_dept` (
  `id` varchar(64) NOT NULL,
  `user_id` varchar(64) DEFAULT '0',
  `dept_id` varchar(64) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blade_user_dept
-- ----------------------------
