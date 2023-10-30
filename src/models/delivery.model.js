const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
  }],
  // Other delivery person details
});

const Delivery = mongoose.model('Delivery', deliverySchema);
module.exports = { Delivery };
