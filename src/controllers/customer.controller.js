const { Restaurant, Order, Customer } = require('../models');

// Get a list of all restaurants
const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching restaurants' });
  }
};

// Search for a restaurant by name
const searchRestaurant = async (req, res) => {
  const { name } = req.query;
  try {
    const restaurants = await Restaurant.find({ name: new RegExp(name, 'i') });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Error searching for restaurants' });
  }
};

// Get menu from a restaurant
const getMenu = async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const restaurant = await Restaurant.findById(restaurantId).populate('menu');
    console.log(restaurant);
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    res.json(restaurant.menu);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching menu', error });
  }
};

// Place an order
const placeOrder = async (req, res) => {
  const { customerId, restaurantId, items } = req.body;
  console.log(customerId, restaurantId, items);

  try {
    const customer = await Customer.findById(customerId);
    console.log(customer);
    const restaurant = await Restaurant.findById(restaurantId);
    if (!customer || !restaurant) {
      return res.status(404).json({ error: 'Customer or restaurant not found' });
    }

    const order = new Order({
      customer: customer._id,
      restaurant: restaurant._id,
      menuItems: items.map(item => ({
        item: item.itemId,
        quantity: item.quantity,
      })),
    });

    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error placing the order', error });
  }
};


module.exports = {
  getMenu,
  getRestaurants,
  placeOrder,
  searchRestaurant
};
