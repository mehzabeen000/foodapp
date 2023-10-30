const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  menu: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Menu'
  }],
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
  }],
  // Other restaurant details
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = { Restaurant };