const express = require("express");
const router = express.Router();

const prayerController = require("../controllers/prayers");

router.get("/ad", prayerController.getADPrayers);

router.get("/rest", prayerController.getRestPrayers);

module.exports = router;
