var conexion = require('./conexionbd')

function listarPeliculas(filtros, callbackOk, callbackError) {
  conexion.query('SELECT * FROM pelicula', (err, data) => {
    if (err) {
      console.log(err)
      callbackError(err)
    } else {
      callbackOk({ peliculas: data })
    }
  })
}

module.exports.listarPeliculas = listarPeliculas