// routes/restaurantOwnerRoutes.js
const express = require('express');
const router = express.Router();
const { restaurant } = require('../controllers');

// Get active orders for the restaurant
router.get('/orders/active', restaurant.getActiveOrders);

// Accept an order
router.post('/orders/accept/:orderId', restaurant.acceptOrder);

// Reject an order
router.post('/orders/reject/:orderId', restaurant.rejectOrder);

module.exports = router;
