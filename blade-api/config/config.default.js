/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586577470521_6274';
  // add your middleware config here
  config.middleware = [ 'jwt' ];
  const userConfig = {
    security: {
      csrf: false,
    },
    jwt: {
      authorization: 'Basic c3dvcmQ6c3dvcmRfc2VjcmV0',
      secret: 'egg-admin-jwt',
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
