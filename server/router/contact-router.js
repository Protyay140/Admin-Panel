const express = require('express');
const contactForm = require('../controllers/contact-controller');
const validator = require('../middlewares/validator-middleware');
const contactSchema = require('../validator/contact-validator');
const router = express.Router();

router.route('/contact').post(validator(contactSchema),contactForm);
module.exports = router;