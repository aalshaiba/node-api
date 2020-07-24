const express = require("express");
const router = express.Router();

const dateController = require("../controllers/arabic-date");

router.get("/", dateController.getHijriDate);

module.exports = router;
