const { Order } = require('../models');

// Accept an order for delivery
const acceptOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    order.status = 'Cooked';
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error accepting the order for delivery' });
  }
};

// Pick up an order
const pickOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    order.status = 'Picked';
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error picking up the order', error });
  }
};

// Mark an order as delivered
const markDelivered = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    order.status = 'Delivered';
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error marking the order as delivered' });
  }
};


module.exports = {
  markDelivered,
  acceptOrder,
  pickOrder
};