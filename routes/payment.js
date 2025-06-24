const express = require('express');
const { payment } = require('../controllers/paymentController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/create-checkout-session', payment);


module.exports = router;
