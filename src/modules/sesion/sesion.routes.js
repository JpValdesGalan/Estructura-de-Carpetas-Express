const router = require('express').Router();
const controller = require('./sesion.controller');

router.get('/', controller.getAll);

module.exports = router;