const mongoose = require("mongoose");
const { Schema } = mongoose;
const FormSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  student: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    // required: true,
  },
  gallery: {
    type: String,
    // required: true,
  },
  language: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("formdata", FormSchema);
