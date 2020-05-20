'use strict';
const jwt = require('jsonwebtoken');
module.exports = {
  jwtSign(data) {
    return jwt.sign(data, this.app.config.jwt.secret, {
      expiresIn: 60 * 60 * 60 * 24,
    });
  },
  jwtVerify(bladeAuth) {
    try {
      return jwt.verify(bladeAuth, this.app.config.jwt.secret);
    } catch (err) {
      return err;
    }
  },
  jwtDecode() {
    const token = this.request.header['blade-auth'];
    if (token) {
      return jwt.decode(token);
    }
  },
  result({ success, ...pramas }) {
    if (success) {
      this.body = { success, code: 200, ...pramas };
    } else {
      this.body = { success, code: 400, ...pramas };
    }
  },
};
