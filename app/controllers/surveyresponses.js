'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Surveyresponse = models.surveyresponse

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  Surveyresponse.find()
    .then(surveyresponses => res.json({
      surveyresponses: surveyresponses.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const responses = (req, res, next) => {
  Surveyresponse.find()
    .then(surveyresponses => res.json({
      surveyresponses: surveyresponses.filter((surveys) => {
        return surveys.surveyId === req.params.id
      })
    }))
    .catch(next)
}

const show = (req, res, next) => {
  res.json({
    surveyresponse: req.surveyresponse.toJSON({ virtuals: true, user: req.user })
  })
}

const create = (req, res, next) => {
  const surveyresponse = Object.assign(req.body.surveyresponse, {
    _owner: req.user._id
  })
  Surveyresponse.create(surveyresponse)
    .then(surveyresponse =>
      res.status(201)
        .json({
          surveyresponse: surveyresponse.toJSON({ virtuals: true, user: req.user })
        }))
    .catch(next)
}

const update = (req, res, next) => {
  delete req.surveyresponse._owner  // disallow owner reassignment.
  req.surveyresponse.update(req.body.surveyresponse)
    .then(() => res.sendStatus(204))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.surveyresponse.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
  responses
}, { before: [
  { method: setUser, only: ['index', 'show', 'responses'] },
  { method: authenticate, except: ['index', 'show', 'responses'] },
  { method: setModel(Surveyresponse), only: ['show'] },
  { method: setModel(Surveyresponse, { forUser: true }), only: ['update', 'destroy'] }
] })
