const express = require('express');
const router = express.Router();
const controllers = require("../controllers/auth-controller");
const validator = require('../middlewares/validator-middleware');
const {loginSchema , signupSchema} = require('../validator/auth-validator');
const userMiddleware =  require("../middlewares/userMiddleware");

router.route("/").get(controllers.home);

router.route("/register").post(validator(signupSchema),controllers.register);
router.route("/login").post(validator(loginSchema),controllers.login);
router.route("/user").get(userMiddleware,controllers.user);

module.exports = router;