const express = require('express')
const FeatureList = require('../models/FeatureList')
const router = express.Router()


router.get('/', async (req, res) => {
  try {
    const features = await FeatureList.find({})

    res.send({
      status: 'success',
      results: features.length,
      data: {
        features
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
    try {
      const newFeature = await FeatureList.create(req.body)
      res.status(201).json({
        status: 'success',
        data: {
          feature: newFeature
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
