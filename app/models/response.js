'use strict'

const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  response: {
    answer: {
      type: String
    },
    responseId: {
      type: String
    },
    anonymous: {
      type: Boolean
    }
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

mongoose.model('Response', responseSchema)

module.exports = responseSchema
