const mongoose = require("mongoose");
const server = require("./src/app");

// Update your database connection URL to use localhost
const dbURL = 'mongodb://localhost:27017/foodapp';

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Add other options if needed
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(`MongoDB connection error: ${err}`);
});

// The rest of your code remains the same
server.listen('3000', () => {
  console.log(`Server started on port 3000`);
});

module.exports = server;
