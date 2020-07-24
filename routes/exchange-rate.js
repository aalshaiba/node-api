const express = require('express');

const router = express.Router();

const exchangeController = require('../controllers/exchange-rate');

router.get('/', exchangeController.getExchangeRate);

module.exports = router;