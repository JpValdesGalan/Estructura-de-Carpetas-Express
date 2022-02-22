const router = require('express').Router();
const controller = require('./group.controller');

router.get('/', controller.getAll);

module.exports = router;