const { Order, Restaurant } = require('../models');

// Get active orders for the restaurant
const getActiveOrders = async (req, res) => {
  const { ownerId } = req.params;

  try {
    const restaurant = await Restaurant.findOne({ owner: ownerId });
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    const orders = await Order.find({ restaurant: restaurant._id, status: 'Pending' });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching active orders' });
  }
};

// Accept an order
const acceptOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    order.status = 'Accepted';
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error accepting the order' });
  }
};

// Reject an order
const rejectOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    order.status = 'Rejected';
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error rejecting the order' });
  }
};

module.exports = {
  getActiveOrders,
  acceptOrder,
  rejectOrder
};
