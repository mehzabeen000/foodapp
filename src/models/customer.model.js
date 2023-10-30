const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
  // Other customer details
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = { Customer };
