// const express = require('express');
// const User = require('../models/User');
// const router = express.Router();
// const { check, validationResult} = require("express-validator");
// const bcrypt = require("bcryptjs");
// // Middleware to parse JSON bodies
// router.use(express.json());

// router.get('/', async (req, res) => {
//     try {
//         const user = await User.find({});
  
//         res.send({
//             status: 'success',
//             results: user.length,
//             data: {
//                 user
//             }
//         });
//     } catch (error) {
//         res.send({
//             status: 'fail',
//             message: error
//         });
//     }
// });

// router.post('/login', async (req, res) => {
//     try {
//         const newUser = await User.create(req.body);
//         res.status(201).json({
//             status: 'success',
//             data: {
//                 user: newUser
//             }
//         });
//     } catch (error) {
//         res.status(400).json({
//             status: 'fail',
//             message: error
//         });
//     }
// });


// // router.post('/', async (req, res) => {
// //     const {email, password} = req.body;
// //     console.log(req.body);
// //     try {
// //         const matchUser = await User.findOne({ email: email}, { password: password});
// //         res.status(200).json({
// //             status: 'success',
// //             data: {
// //                 user: matchUser
// //             }
// //         });
// //     } catch (error) {
// //         res.status(400).json({
// //             status: 'fail',
// //             message: error
// //         });
// //     }
// // });

// router.post("/",[
//         check()
//         .not()
//         .isEmpty(),
//         check("email", "Please enter a valid email").isEmail(),
//         check("password", "Please enter a valid password").isLength({
//             min: 6
//         })
//     ],
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 errors: errors.array()
//             });
//         }

//         const {
//             firstname,
//             lastname,
//             email,
//             password,
//             confirmPassword
//         } = req.body;
//         try {
//             let user = await User.findOne({
//                 email
//             });
//             if (user) {
//                 return res.status(400).json({
//                     msg: "User Already Exists"
//                 });
//             }

//             user = new User({
//                 firstname,
//                 lastname,
//                 email,
//                 password,
//                 confirmPassword
//             });

//             const salt = await bcrypt.genSalt(10);
//             user.password = await bcrypt.hash(password, salt);

//             await user.save();

//             res.status(200).json({
//                 message: "User registered successfully",
//                 user: {
//                     id: user.id,
//                     firstname: user.firstname,
//                     lastname: user.lastname,
//                     email: user.email
//                 }
//             });

//             // const payload = {
//             //     user: {
//             //         id: user.id
//             //     }
//             // };

//             // jwt.sign(
//             //     payload,
//             //     "randomString", {
//             //         expiresIn: 10000
//             //     },
//             //     (err, token) => {
//             //         if (err) throw err;
//             //         res.status(200).json({
//             //             token
//             //         });
//             //     }
//             // );

//         } catch (err) {
//             console.log(err.message);
//             res.status(500).send("Error in Saving");
//         }
//     }
// );


// module.exports = router;
