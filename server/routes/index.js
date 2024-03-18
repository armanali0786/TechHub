const express = require('express')
const router = express.Router()
const questions = require('./questions')
const features = require('./features')
const cardlists = require('./cardList')
const sliding = require('./sliding')
const register = require('./register')
const login = require('./login')

router.use('/questions', questions)

router.use('/features', features)

router.use('/cardlists', cardlists)

router.use('/sliding', sliding)

router.use('/register', register)

router.use('/login', login)



module.exports = router
