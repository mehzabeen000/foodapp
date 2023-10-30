const express = require('express');
const router = express.Router();
const { customer } = require('../controllers');

// Get a list of all restaurants
router.get('/restaurants', customer.getRestaurants);

// Search for a restaurant by name
router.get('/restaurants/search', customer.searchRestaurant);

// Get menu from a restaurant
router.get('/restaurants/menu/:restaurantId', customer.getMenu);

// Place an order
router.post('/orders/place', customer.placeOrder);

module.exports = router;
