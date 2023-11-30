const { model, Schema } = require("mongoose");

const PaySchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  buyer_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  transactionId: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Payment = model("Payment", PaySchema);

module.exports = Payment;
