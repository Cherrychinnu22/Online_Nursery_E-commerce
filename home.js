const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Home Page
router.get('/home', async (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  const products = await Product.find();
  res.render('home', { products });
});

module.exports = router;