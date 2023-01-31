const { render } = require("ejs");
const express = require("express");

const paymentController = require("../controllers/payment");

const router = express.Router();

router.get("/buy-me-a-coffee", paymentController.buyACoffee);

router.post("/send", paymentController.goToPay);

module.exports = router;
