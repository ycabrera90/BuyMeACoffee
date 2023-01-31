const axios = require("axios").default;

const PAYMENT_ENDOPOINT = "https://api.dlocalgo.com/v1/payments";

exports.payment = ({ amount, currency, success_url, back_url }, cbk) => {
  console.log("success_url", success_url);
  console.log("back_url", back_url);
  axios({
    method: "post",
    url: PAYMENT_ENDOPOINT,
    headers: {
      Authorization: `Bearer ${process.env.DLOCAL_API_KEY}:${process.env.DLOCAL_API_SECRET}`,
    },
    data: {
      amount,
      currency,
      success_url,
      back_url,
    },
  })
    .then((response) => {
      cbk({ response, error: false });
    })
    .catch((error) => {
      cbk({ response: error, error: true });
    });
};
