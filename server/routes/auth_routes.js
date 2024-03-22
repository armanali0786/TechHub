// auth_routes.js

const express = require('express');
const router = express.Router();
const Authcontroller = require('../controller/auth'); // Importing the controller
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
// Route handler for POST /login
router.post('/login',
    [
        check("email")
            .isEmail()
            .withMessage("Please Enter Valid Email")
            .custom((value) => {
                return User.findOne({ email: value }).then((foundUser) => {
                    if (!foundUser) {
                        return Promise.reject("User not Found, Please Enter valid email");
                    }
                });
            }),
        check("password")
            .notEmpty()
            .withMessage("Password field can not empty")
            .custom(async (value, { req }) => {
                const user = await User.findOne({ email: req.body.email });
                const isEqual = await bcrypt.compare(value, user.password);
                if (!isEqual) {
                    return Promise.reject(
                        "Incorrect password, Please Enter Valid Password"
                    );
                }
            }),
    ],
    Authcontroller.postLogin); // This line seems to be causing the issue



// Route handler for POST /register
router.post('/register', ([
    check()
        .not()
        .isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
        min: 6
    })
]), Authcontroller.postRegister);

module.exports = router;


