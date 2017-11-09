'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Response = models.response
const Survey = models.survey

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  Response.find()
    .then(responses => res.json({
      responses: responses.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    response: req.response.toJSON({ virtuals: true, user: req.user })
  })
}

const create = (req, res, next) => {
  const response = Object.assign(req.body.response, {
    _owner: req.user._id
  })
  Response.create(response)
    .then(response =>
      res.status(201)
        .json({
          response: response.toJSON({ virtuals: true, user: req.user })
        }))
    .catch(next)
}

const update = (req, res, next) => {
  // delete req.response._owner  // disallow owner reassignment.
  // find the survey, then the questions
    // db.surveys.findOne(ObjectId('5a030cd02c44778ab230144c'))
  // loop through questions to see if question._id = responseId
    // db.surveys.findOne(ObjectId('5a030cd02c44778ab230144c')).questions
  // if true then append the response from req into
  // db.surveys.findOne(ObjectId('5a030cd02c44778ab230144c')).questions[0].question.responses
  console.log('is the route working??')
  req.response.update(req.body.response)
    .then(() => res.sendStatus(204))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.response.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show', 'update'] },
  { method: setModel(Response), only: ['update'] },
  { method: setModel(Response, { forUser: true }), only: ['update', 'destroy'] }
  // { method: setModel(Survey), only: ['update'] },
  // { method: setModel(Survey, { forUser: true }), only: ['update', 'destroy'] }
] })
