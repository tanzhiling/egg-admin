# admin-egg

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

#### model dymaic create

```bash
 $ sequelize-auto -o "./" -h localhost -d admin -u root -x 123456 -p 3306 -t sys_user
```

#### 功能

1. 完成 Jwt 配置 权限校验
2. user 模块 完成用户注册，登录
3. module 模块 增删查改
