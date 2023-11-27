const { model, Schema } = require("mongoose");

const PropertySchema = new Schema({
  
  agent_email: {
    type: String,
    required: true,
  },
  
  agent_name: {
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
    type: Number,
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
  // facility: [
  //   {
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     details: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
});

const Property = model("Properties", PropertySchema);

module.exports = Property;
