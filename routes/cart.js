const express = require('express');
const { carts } = require('../models/Cart');
const { products } = require('../models/Product');
const router = express.Router();

// Add to cart
router.post('/add', (req, res) => {
    const { userId, productId } = req.body;
    const product = products.find(p => p.id === productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    
    const cart = carts.find(c => c.userId === userId) || { userId, items: [] };
    cart.items.push(product);
    carts.push(cart);
    res.json(cart);
});

// Get cart for user
router.get('/:userId', (req, res) => {
    const cart = carts.find(c => c.userId === req.params.userId);
    if (!cart) return res.status(404).json({ message: 'Cart is empty' });
    res.json(cart);
});

module.exports = router;