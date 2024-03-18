const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
// Middleware to parse JSON bodies
router.use(express.json());

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user)
            return res.status(400).json({
                message: "User Not Exist"
            });
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.status(200).json({
                status: 'success',
                message: 'Login Successfull',
                data: {
                    user
                }
            })
        }
        if (!isMatch) {
            return res.status(400).json({
                message: "Incorrect Password !"
            });
        }
  
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
});


module.exports = router;
