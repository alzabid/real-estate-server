const { model, Schema } = require("mongoose");

const OfferSchema = new Schema({
  email: {
    type: String,
    required: true,
  },

  buyer_name: {
    type: String,
    required: true,
  },
  agent_name: {
    type: String,
    required: true,
  },
  agent_email: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  photoURL: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
});

const offer = model("offers", OfferSchema);

module.exports = offer;
