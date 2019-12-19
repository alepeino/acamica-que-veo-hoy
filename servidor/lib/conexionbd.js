var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : '',
  password : '',
  database : 'que_veo_hoy'
});

module.exports = connection;

