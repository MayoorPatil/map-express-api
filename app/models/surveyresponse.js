'use strict'

const mongoose = require('mongoose')

const surveyresponseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  questions: [{
    question1: [{
      questionDescription: {
        type: String,
        required: true
      },
      active: {
        type: Boolean,
        required: true
      },
      answer: {
        type: String,
        required: true
      }
    }],
    question2: [{
      questionDescription: {
        type: String,
        required: true
      },
      active: {
        type: Boolean,
        required: true
      },
      answer: {
        type: String,
        required: true
      }
    }],
    question3: [{
      questionDescription: {
        type: String,
        required: true
      },
      active: {
        type: Boolean,
        required: true
      },
      answer: {
        type: String,
        required: true
      }
    }]
  }],
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

const Surveyresponse = mongoose.model('Surveyresponse', surveyresponseSchema)

module.exports = Surveyresponse
