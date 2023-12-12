const mongoose = require("mongoose");
const { Schema } = mongoose;

const InstaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  thoughts: {
    type: String,
  },

  video: {
    type: String,
    
  },
  photo: {
    type: String,
    
  },
  audio: {
    type: String,
  
  }
});
module.exports = mongoose.model("Insta", InstaSchema);
