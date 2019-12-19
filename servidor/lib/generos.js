var conexion = require('./conexionbd')

function listarGeneros(callbackOk, callbackError) {
  conexion.query('SELECT * FROM genero', (err, data) => {
    if (err) {
      console.log(err)
      callbackError(err)
    } else {
      callbackOk({ generos: data })
    }
  })
}

module.exports.listarGeneros = listarGeneros