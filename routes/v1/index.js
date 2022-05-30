const router = require('express').Router();

router.use('/user', require('./authRoute'));

module.exports = router;