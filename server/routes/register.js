const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const user = await User.find({});
  
        res.send({
            status: 'success',
            results: user.length,
            data: {
                user
            }
        });
    } catch (error) {
        res.send({
            status: 'fail',
            message: error
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
});

module.exports = router;
