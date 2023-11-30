const { model, Schema } = require("mongoose");

const WishlishSchema = new Schema({
  property_id: {
    type: String,
    required: true,
  },
  email: {
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

  agent_photoURL: {
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
  photoURL: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
});

const wishlist = model("Wishlists", WishlishSchema);

module.exports = wishlist;
