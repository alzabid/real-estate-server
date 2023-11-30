require("dotenv").config();

const PaymentSchema = require("../models/PaymentSchema");
const OfferSchema = require("../models/OfferSchema");
const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51OHu2XBMntAgfRXAw69Nr9utg40KCf0rRTp1oEZOsgSTPe6FACjBMFpsmSmPakvagsCR7xGFyEYvAA9agcYAHwsZ00V03qTJ9s"
);
router.post("/health/create-payment-intent", async (req, res) => {
  const price = req.body.price;
  const amount = parseInt(price * 100);

  console.log(amount);
  console.log(amount, "amount");
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  res.send({ clientSecret: paymentIntent.client_secret });
});






router.post("/health/payments", async (req, res) => {
  const payment = req.body;
  const paymentResult = await PaymentSchema.insertMany(payment);
  console.log("payment info", payment);
  // const query = {
  //   _id: {
  //     $in: payment.parcelId.map((id) => id),
  //   },
  // };
  // const deleteResult = await OfferSchema.deleteMany(query);
  res.send(paymentResult);
});

router.get("/health/payments", async (req, res) => {
  const payment = req.body;
  const paymentResult = await PaymentSchema.find(payment);
  res.send(paymentResult);
});




module.exports = router;
