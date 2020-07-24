const express = require('express');

const router = express.Router();

const OilPricesController = require('../controllers/oil-prices');

router.get('/', OilPricesController.getOilPrices);

module.exports = router;