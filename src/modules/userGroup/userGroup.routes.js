const router = require('express').Router();
const controller = require('./userGroup.controller');

router.get('/', controller.getAll);

module.exports = router;