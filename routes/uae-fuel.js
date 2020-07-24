const express = require('express');

const router = express.Router();

const uaeFuelController = require('../controllers/uae-fuel');

router.get('/', uaeFuelController.getUAEFuel);

router.get('/head', uaeFuelController.getMonths);

module.exports = router;