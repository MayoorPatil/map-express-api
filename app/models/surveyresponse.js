'use strict'

const mongoose = require('mongoose')

const surveyresponseSchema = new mongoose.Schema({
  surveyId: {
    type: String,
    required: true
  },
  questions: [{
    questionDescription: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    questionId: {
      type: String,
      required: true
    },
    anonymous: {
      type: Boolean,
      required: true
    }
  }]
})

const Surveyresponse = mongoose.model('Surveyresponse', surveyresponseSchema)

module.exports = Surveyresponse
