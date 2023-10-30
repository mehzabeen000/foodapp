const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

const url = 'mongodb://localhost:27017/foodapp';
const dataPath = 'data.json';
const jsonData = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(jsonData);

async function seedDatabase() {
  const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });
  console.log(client);

  try {
    await client.connect();
    const db = client.db(); // Use your database name here

    // Insert data into MongoDB collections
    await db.collection('customers').insertMany(data.customers);
    await db.collection('delivery').insertMany(data.delivery);
    await db.collection('menus').insertMany(data.menus);
    await db.collection('orders').insertMany(data.orders);
    await db.collection('restaurants').insertMany(data.restaurants);
    await db.collection('owners').insertMany(data.owners);

    console.log('Data seeded successfully');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    client.close();
  }
}

seedDatabase();
