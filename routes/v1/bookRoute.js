const express = require("express");
const router = express.Router();
const bookController = require("../../controller/bookController");
const { auth } = require('../../middleware');


router.post('/save', auth,bookController.bookRecord);
router.get('/search', auth, bookController.search);

module.exports = router;