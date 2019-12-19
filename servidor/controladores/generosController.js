var express = require('express')
var { listarGeneros } = require('../lib/generos')

var router = express.Router()

router.get('/', (req, res) => {
  listarGeneros(
    (data) => res.send(data),
    (err) => res.status(500).send(err)
  )
})

module.exports = router
