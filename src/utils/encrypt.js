const bcrypt = require("bcrypt");
module.exports = {
  SALT: 10,
  // during register - generate hash for password
  generateHash(pwd) {
    return bcrypt.hashSync(pwd, this.SALT);
  },
  // during login - check the hash with entered password
  compareHash(dbPwd, plainPwd) {
    return bcrypt.compareSync(plainPwd, dbPwd);
  },
}