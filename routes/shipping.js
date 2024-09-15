const express = require('express');
const { shippingAddresses } = require('../models/Shipping');
const router = express.Router();

// Save shipping address
router.post('/add', (req, res) => {
    const { userId, address } = req.body;
    shippingAddresses.push({ userId, address });
    res.status(201).json({ message: 'Shipping address saved' });
});

// Get shipping address by user
router.get('/:userId', (req, res) => {
    const address = shippingAddresses.find(a => a.userId === req.params.userId);
    if (!address) return res.status(404).json({ message: 'No shipping address found' });
    res.json(address);
});

module.exports = router;