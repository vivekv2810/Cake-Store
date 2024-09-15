const express = require('express');
const { products } = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/', (req, res) => {
    res.json(products);
});

// Get product by id
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
});

module.exports = router;