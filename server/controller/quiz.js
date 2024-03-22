const express = require('express')
const Quiz = require('../models/Quiz')
const FeatureList = require('../models/FeatureList')
const router = express.Router()

exports.getQuiz =  async (req, res) => {
  try {
    const quiz = await Quiz.find({})

    res.send({
      status: 'success',
      results: quiz.length,
      data: {
        quiz
      }
    })
  } catch (error) {
    res.send({
      status: 'fail',
      message: error
    })
  }
};

exports.postQuiz = async (req, res) => {
  console.log(req.body);
  try {
    const newQuiz = await Quiz.create(req.body)
    res.status(201).json({
      status: 'success',
      data: {
        quiz: newQuiz
      }
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    })
  }
};

exports.getQuizById = async (req, res) => {
  try {
    const { id } = req.params
    const quiz = await Quiz.findOne({ _id: id })

    res.send({
      status: 'success',
      data: {
        quiz
      }
    })
  } catch (error) {
    res.send({
      status: 'fail',
      message: error
    })
  }
};



exports.patchQuiz =  async (req, res) => {
  const { id } = req.params
  try {
    const updateQuiz = await Quiz.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    })
    res.send({
      status: 'success',
      data: {
        quiz: updateQuiz
      }
    })
  } catch (error) {
    res.send({
      status: 'fail',
      message: error
    })
  }
};

exports.deleteQuiz = async (req, res) => {
  const { id } = req.params
  try {
    await Quiz.findByIdAndDelete(id)

    res.send({
      status: 'success',
      data: null
    })
  } catch (error) {
    res.send({
      status: 'fail',
      message: error
    })
  }
};


