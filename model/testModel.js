const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
});

module.exports = testSchema;
