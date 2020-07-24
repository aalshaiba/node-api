const express = require("express");

const fatwasController = require("../controllers/fatwas");

const router = express.Router();

router.get("/", fatwasController.getFatwas);

module.exports = router;
