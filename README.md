
# Egg + Sequelize +Vue 后台管理


>个人练习项目

## 前端采用 vue + Element
## 后端 Egg + Sequelize 


## 已完成功能
- [x] 机构管理，增删查改，完成与租户关联 实现多租户模式下操作
- [x] 用户管理，增删查改，可以与机构，岗位，角色进行关联
- [x] 岗位管理，增删查改，可以与机构进行关联
- [x] 租户管理，增删查改
- [X] 菜单管理，增删查改
- [x] 字典管理，增删查改
- [ ] 角色管理，增删查改，与菜单进行关联，进行菜单权限控制
- [x] 文件上传功能完成，目前采取file模式 后面增加stream模式

## 前端目录结构
```bash
├─public 
└─src
    ├─api        // api存放目录
    ├─assets     // 静态文件
    ├─components // 公共组件
    ├─layout     // 全局layout
    ├─router     // 路由注册
    ├─store      // store管理
    ├─styles     // 公告样式 主题样式
    ├─utils      // 工具类
    ├─views      // 页面
    │─App.vue
    │─main.js    // 入口文件
    └─permission.js  // 路由访问权限控制                  

```

## 后端目录结构
```bash
├── app 
│   ├── controller  // 路由控制层
│   ├── extend      // 扩展的方法工具类
│   ├── middleware  // 中间件
│   ├── model       // 表模型映射
│   ├── public      // 静态文件
│   ├── service     // 服务层
│   └── router.js   // api注册
├── config 
│   ├── config.default.js // 默认配置 
│   ├── config.local.js   // 本地配置
│   ├── config.prod.js    // 生产环境配置
│   ├── plugin.js         // 插件配置
│   └── plugin.local.js   
```

![Image](https://github.com/Tanzhiling/egg-admin/blob/master/assets/bg.jpg)