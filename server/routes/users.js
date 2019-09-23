const uid = require('uid')
const router = require('express').Router()
const saveFile = require('../saveFile')

const User = require('../models/Users')

function saveUsers(data) {
  return saveFile('users.json', data)
}

let users
try {
  users = require('../data/users.json').map(user => {
    return { id: uid(), ...user }
  })
} catch {
  users = []
}

router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  User.find({ id: req.params.id })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  User.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  User.findByIdAndDelete({ _id: req.params.id })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

module.exports = router
