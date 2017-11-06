'use strict'

const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  responses: [{
    response: [{
      responseValue: {
        type: String,
        required: true
      },
      responseId: {
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

const Response = mongoose.model('Response', responseSchema)

module.exports = Response
