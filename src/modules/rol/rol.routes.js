const router = require('express').Router();
const controller = require('./rol.controller');

router.get('/', controller.getAll);

module.exports = router;