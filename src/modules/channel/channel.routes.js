const router = require('express').Router();
const controller = require('./channel.controller');

router.get('/', controller.getAll);

module.exports = router;