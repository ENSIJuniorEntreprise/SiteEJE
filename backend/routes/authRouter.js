const express = require("express");
const verifyJWT = require("../middleware/verifyJWT");
const authController = require("../controllers/authController")

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/checkpassword', authController.checkPassword);
router.get('/logout', authController.logout);
router.get('/getinfo', verifyJWT, authController.getAccountInfo);
router.put('/:id', authController.setAccountInfo);

module.exports = router;