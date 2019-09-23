const uid = require('uid')
const router = require('express').Router()
const saveFile = require('../saveFile')

const Card = require('../models/Card')

function saveCards(data) {
  return saveFile('cards.json', data)
}

let cards

try {
  cards = require('../data/cards.json').map(card => {
    return { id: uid(), ...card }
  })
} catch {
  cards = []
}

router.get('/', (req, res) => {
  Card.find()
    .then(cards => res.json(cards))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  Card.find({ id: req.params.id })
    .then(cards => res.json(cards))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  Card.create(req.body)
    .then(cards => res.json(cards))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Card.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(card => res.json(card))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Card.findByIdAndDelete({ _id: req.params.id })
    .then(card => res.json(card))
    .catch(err => res.json(err))
})

module.exports = router
