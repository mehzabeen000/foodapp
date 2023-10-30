const express = require('express');
const router = express.Router();
const { delivery } = require('../controllers');

// Accept an order for delivery
router.post('/orders/accept/:orderId', delivery.acceptOrder);

// Pick up an order
router.post('/orders/pick/:orderId', delivery.pickOrder);

// Mark an order as delivered
router.post('/orders/deliver/:orderId', delivery.markDelivered);

module.exports = router;
