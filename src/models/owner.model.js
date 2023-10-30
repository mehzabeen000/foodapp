const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
  },
  // Other restaurant owner details
});

const Restaurant = mongoose.model('RestaurantOwner', OwnerSchema);
module.exports = { Restaurant };
