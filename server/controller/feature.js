const express = require('express')
const FeatureList = require('../models/FeatureList')
const router = express.Router()


exports.getfeatures =  async (req, res) => {
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
};

// ****************************

exports.postfeatures = async (req, res) => {
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
  };


  // exports.postfeaturesById = async (req, res) => {
  //   try {
  //     const newFeature = await FeatureList.create(req.body)
  //     res.status(201).json({
  //       status: 'success',
  //       data: {
  //         feature: newFeature
  //       }
  //     })
  //   } catch (error) {
  //     res.status(400).json({
  //       status: 'fail',
  //       message: error
  //     })
  //   }
  // };

  exports.filterFeatures =  (req, res, next) => { 
    const filters = req.query;
    console.log(filters)
    // Convert filters object into MongoDB query
    const mongoQuery = {};
    for (const key in filters) {
      mongoQuery[key] = filters[key];
    }

    // Execute MongoDB query
    FeatureList.find(mongoQuery).toArray((err, filteredUsers) => {
      if (err) {
        console.error('Error executing MongoDB query:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      
      res.send(filteredUsers);
    });
  };
