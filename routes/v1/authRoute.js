const express = require("express");
const router = express.Router();
const authController = require("../../controller/authController");
const { auth } = require('../../middleware');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/activateUser', auth, authController.activate);

module.exports = router;