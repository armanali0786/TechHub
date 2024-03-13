const express = require('express')
const FeatureList = require('../models/FeatureList')
const router = express.Router()


router.get('/', async (req, res) => {
  try {
    const questions = await FeatureList.find({})

    res.send({
      status: 'success',
      results: questions.length,
      data: {
        questions
      }
    })
  } catch (error) {
    res.send({
      status: 'fail',
      message: error
    })
  }
})

// ****************************

router.post('/', async (req, res) => {
    console.log(req.body);
  
    try {
      const newQuestion = await FeatureList.create(req.body)
      res.status(201).json({
        status: 'success',
        data: {
          question: newQuestion
        }
      })
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error
      })
    }
  })

module.exports = router
