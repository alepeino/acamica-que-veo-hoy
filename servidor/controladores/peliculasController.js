var express = require('express')
var { listarPeliculas } = require('../lib/peliculas')

var router = express.Router()

router.get('/', (req, res) => {
  var filtros = req.query
  listarPeliculas(
    (data) => res.send(data),
    (err) => res.status(500).send(err)
  )
})

module.exports = router
