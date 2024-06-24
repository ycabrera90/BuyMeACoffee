const express = require("express")

const paymentController = require("../controllers/payment")

const router = express.Router()

router.post("/send", paymentController.goToPay)

module.exports = router
