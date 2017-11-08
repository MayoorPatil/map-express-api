'use strict'

const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  response: {
    answer: {
      type: String,
      default: '',
      required: true
    },
    responseId: {
      type: String,
      default: '',
      required: true
    },
    anonymous: {
      type: Boolean,
      default: true,
      required: true
    },
    _owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }
})

mongoose.model('Response', responseSchema)

module.exports = responseSchema
