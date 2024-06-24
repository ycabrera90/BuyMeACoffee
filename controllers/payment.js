const dlocal = require("../services/dlocalPayment")

exports.buyACoffee = (_, res) => {
	res.render("buy-me-coffee", { pageTitle: "Buy me a coffee 🤓" })
}

exports.goToPay = (req, res) => {
	const { amount, currency } = req.body
	const success_url = req.protocol + "://" + req.get("host")
	const back_url = req.protocol + "://" + req.get("host")

	dlocal.payment(
		{ amount, currency, success_url, back_url },
		({ response, error }) => {
			if (error) {
				res.send({ code: response.code, message: response.message })
			} else {
				res.redirect(response.data.redirect_url)
			}
		}
	)
}
