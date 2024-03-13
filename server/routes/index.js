const express = require('express')
const router = express.Router()
const questions = require('./questions')
const features = require('./features')


router.use('/questions', questions)

router.use('/features', features)


module.exports = router
