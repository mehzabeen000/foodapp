const express = require("express");
const customerRoute = require("./customer.route");
const deliveryRoute = require("./delivery.route");
const restaurantRoute = require("./restaurant.route");

const router = express.Router();

router.use('/customer', customerRoute);
router.use("/delivery", deliveryRoute)
router.use("/restaurant", restaurantRoute);

module.exports = router;