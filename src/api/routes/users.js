const express = require('express');
const router = express.Router();
const { REGISTER, LOGIN } = require('../../utils/config').ROUTES.USER;
const { register,login } = require('../../controller/user_controller');

router.use(REGISTER,register);
router.use(LOGIN,login);

module.exports = router;