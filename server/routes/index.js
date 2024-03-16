const express = require('express')
const router = express.Router()
const questions = require('./questions')
const features = require('./features')
const cardlists = require('./cardList')
const sliding = require('./sliding')
const register = require('./register')

router.use('/questions', questions)

router.use('/features', features)

router.use('/cardlists', cardlists)

router.use('/sliding', sliding)

router.use('/register', register)



module.exports = router
