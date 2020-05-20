'use strict';
module.exports = options => {
  return async function(ctx, next) {
    const authorization = ctx.request.header.authorization;
    const bladeAuth = ctx.request.header['blade-auth'];
    const whiteList = [ '/blade-auth/auth/token' ];
    if (authorization === options.authorization) {
      if (whiteList.includes(ctx.path)) {
        await next();
      } else {
        if (bladeAuth) {
          const decode = await ctx.jwtVerify(bladeAuth);
          if (decode.id) {
            const hasUser = await ctx.model.BladeUser._findOne({ id: decode.id }, true);
            if (hasUser) {
              await next();
            } else {
              ctx.result({ code: 401, msg: '用户信息验证失败！' });
            }
          } else if (decode.expir && Date.now() - decode.expire > 0) {
            ctx.result({ code: 401, msg: 'token已过期！' });
          } else {
            ctx.result({ code: 401, msg: '未登录，请先登录！' });
          }
        } else {
          ctx.result({ code: 401, msg: '未登录，请先登录！' });
        }
      }
    } else {
      ctx.result({ code: 401, msg: '没有权限，请登录！' });
    }
  };
};
