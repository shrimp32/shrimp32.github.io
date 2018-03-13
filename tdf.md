# 太极SpringBoot开发框架
## 一、概述
项目名：tj-devplatform

太极SpringBoot开发框架，是基于SpringBoot的开发框架。

### 项目模块规划
1. tj-devplatform-project
    - tj-devplatform-util：工具包
        - cn.com.taiji.util
    - tj-devplatform-log: 日志功能
        - cn.com.taiji.log
    - tj-devplatform-sys：系统功能
        - cn.com.taiji.sys
    - tj-devplatform-sys-web：系统功能的前端
        - cn.com.taiji.sys.web
    - tj-devplatform-security：系统安全
        -  cn.com.taiji.security
    - tj-devplatform-cms：内容管理
        - cn.com.taiji.cms
    - tj-devplatform-cms-web:内容管理的前端
        - cn.com.taiji.cms.web
    
2. tj-devplatform-mobile 移动版domo
3. tj-devpaltform-generator代码生成器项目
4. tj-devplatform-sample 示例项目

### 开发环境
- jdk 1.8 或以上
- 构件工具：maven 3.0+
- 代码管理：git
- 开发工具：IntelliJ IDEA

### 系统架构
- 分层结构
    - domain:包含domain及repository
    - dto
    - service
    - web：包含controller
    - api：开放的api
- 框架组成
    - spring MVC
    - spring Data JPA
    - spring Security
    - Thymeleaf 
    - swagger2 在线api
 
### sys功能
- 用户管理
- 组织管理
- 角色管理
- 用户组管理
- 功能管理
- 权限管理
- 数据字典管理
- 系统日志管理   
- 
## 二、开发指南

### 1. 开发工具
- IntelliJ IDEA的使用
- spring STS的使用
- maven基础
- git常见用法
- gitlab的使用

### 2. 快速入门
- 开始你的项目
- 项目模块及结构
- 配置文件详解
    - 模式：开发模式、生产模式
    - web方面
    - 数据库方面
    - 页面模板
    - 安全方面

### 3. 开发指南
- 统一日志的使用
- 统一异常的使用
- 统一鉴权的使用
- 用户信息常见用法
- 数据字典常见用法

### 4. 贡献你的代码
- 提出需求或问题
- bug修复
- 新功能或模块

## 问题
1. 用户信息展示用户所属部门
2. 角色，编辑用户时，右边带搜索
3. 角色，编辑菜单时，带搜索

## 新增功能
1. 生成器增加bootstrap模板
2. 配置文件中可配置登陆是否启用验证码
3. AOP实现统一日志功能
4. 使用yml配置文件
5. 统一异常框架

## 开发规范
1. 在api、controller中的各项操作均需有日志
2. 警告、提示、错误信息的规范
3. 配置文件
    - 模式：开发模式、生产模式
    - web方面
    - 数据库方面
    - 页面模板
    - 安全方面

## 文档
- javadoc
- 项目简介
- 系统配置说明
### 开发手册
- 如何获取当前用户信息？
- 如何实现翻页？
- 如何实现文件上传？
- 








