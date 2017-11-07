'use strict'

const mongoose = require('mongoose')
const questionSchema = require('./question')

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  questions: [questionSchema],
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    // transform here is creating editable virtual based on certain condition
    transform: function (doc, ret, options) {
      const ownerId = (options.owner && options.owner._id) || false
      ret.editable = ownerId && ownerId.equals(doc._owner)
      return ret
    }
  }
})

const Survey = mongoose.model('Survey', surveySchema)

module.exports = Survey
