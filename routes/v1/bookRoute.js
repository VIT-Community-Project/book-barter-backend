const express = require("express");
const router = express.Router();
const bookController = require("../../controller/bookController");
const { auth } = require('../../middleware');


router.post('/save', bookController.bookRecord);
router.get('/search', bookController.search);

module.exports = router;