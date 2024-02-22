const express = require('express');
const router = express.Router();
const { WEEBHOOKS } = require('../../utils/config').ROUTES.MESSENGER;
const { getWebHooks,postWebHooks } = require('../../controller/messenger_controller');

router.get(WEEBHOOKS,getWebHooks);
router.post(WEEBHOOKS,postWebHooks);

module.exports = router;