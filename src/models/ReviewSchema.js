const { model, Schema } = require("mongoose");

const ReviewSchema = new Schema({
  property_id: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },

  user_name: {
    type: String,
    required: true,
  },

  user_photoURL: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    
  },
  
});

const review = model("reviews", ReviewSchema);

module.exports = review;
