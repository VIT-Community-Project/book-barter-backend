const router = require('express').Router();

router.use('/user', require('./authRoute'));
router.use('/book', require('./bookRoute'));

module.exports = router;