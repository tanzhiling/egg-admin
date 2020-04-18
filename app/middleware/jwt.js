'use strict';
const jwt = require('jsonwebtoken');

module.exports = options => {
  return async function(ctx, next) {
    const authorization = ctx.request.header.authorization;
    const bladeAuth = ctx.request.header['blade-auth'];
    const whiteList = [ '/blade-sys/user/register', '/blade-sys/user/login' ];
    if (authorization === options.authorization) {
      if (whiteList.includes(ctx.path)) {
        await next();
      } else {
        if (bladeAuth) {
          let decode;
          try {
            decode = jwt.verify(bladeAuth, options.secret);
            if (!decode || !decode.user_name) {
              ctx.body = { code: 401, msg: '没有权限，请登录！' };
            }
            if (Date.now() - decode.expire > 0) {
              ctx.body = { code: 401, msg: 'token已过期！' };
            }
            const isUser = await ctx.model.SysUser.findOne({
              where: { user_name: decode.user_name },
            });
            if (isUser) {
              await next();
            } else {
              ctx.body = { code: 401, msg: '用户信息验证失败！' };
            }
          } catch (err) {
            // err
            ctx.body = err;
            console.log(err);
          }
        } else {
          ctx.body = { code: 401, msg: '未登录，请先登录！' };
        }
      }
    } else {
      ctx.body = { code: 401, msg: '没有权限，请登录！' };
    }
  };
};
