const express = require('express');
const router = express.Router();
const controllers = require("../controllers/auth-controller");
const validator = require('../middlewares/validator-middleware');
const signupSchema = require('../validator/auth-validator');

router.route("/").get(controllers.home);

router.route("/register").post(validator(signupSchema),controllers.register);
router.route("/login").post(controllers.login);

module.exports = router;