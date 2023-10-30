const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  menuItems: [{
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Menu',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  }],
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected', 'Cooked', 'Picked', 'Delivered'],
    default: 'Pending',
  },
  // Other order details
});

const Order = mongoose.model('Order', orderSchema);
module.exports = { Order };
