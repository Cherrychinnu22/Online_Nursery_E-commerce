const mongoose = require('mongoose');
const Product = require('./models/product'); // Import the Product model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/nurseryDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Array of sample products to insert
const products = [
  {
    name: "Rose Plant",
    price: 15,
    image: "/public/images/rose.jpeg"
  },
  {
    name: "Tulip Plant",
    price: 10,
    image: "/images/tulip.jpg"
  },
  {
    name: "Sunflower Plant",
    price: 20,
    image: "/images/sunflower.jpg"
  },
  {
    name: "Lavender Plant",
    price: 18,
    image: "/images/lavender.jpg"
  },
  {
    name: "Cactus Plant",
    price: 12,
    image: "/images/cactus.jpg"
  },
  {
    name: "Cactus Plant",
    price: 12,
    image: "/images/cactus.jpg"
  },
  {
    name: "Cactus Plant",
    price: 12,
    image: "/images/cactus.jpg"
  },
  {
    name: "Cactus Plant",
    price: 12,
    image: "/images/cactus.jpg"
  },
  {
    name: "Cactus Plant",
    price: 12,
    image: "/images/cactus.jpg"
  },
  {
    name: "Cactus Plant",
    price: 12,
    image: "/images/cactus.jpg"
  },
  {
    name: "Cactus Plant",
    price: 12,
    image: "/images/cactus.jpg"
  },
  {
    name: "Cactus Plant",
    price: 12,
    image: "/images/cactus.jpg"
  },
];

// Insert products into the database
async function insertProducts() {
  try {
    await Product.insertMany(products); // Insert the sample products
    console.log('Products inserted successfully');
  } catch (err) {
    console.error('Error inserting products:', err);
  } finally {
    mongoose.connection.close(); // Close the database connection
  }
}

// Run the function
insertProducts();