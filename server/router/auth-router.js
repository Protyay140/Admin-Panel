const express = require('express');
const router = express.Router();
const controllers = require("../controllers/auth-controller");

router.route("/").get(controllers.home);

router.route("/register").post(controllers.register);

module.exports = router;