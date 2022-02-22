const router = require('express').Router();
const controller = require('./message.controller');

router.get('/', controller.getAll);

module.exports = router;