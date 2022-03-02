const router = require('express').Router();
const controller = require('./user.controller');

router.get('/users', (req, res) => {
    res.send('Get Users');
});


module.exports = router;