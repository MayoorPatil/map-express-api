'use strict'

const mongoose = require('mongoose')
const responseSchema = require('./response')

const questionSchema = new mongoose.Schema({
  question: {
    questionDescription: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    },
    options: {
      type: [],
      required: true
    },
    responses: [responseSchema]
  }
})

mongoose.model('Question', questionSchema)

module.exports = questionSchema
