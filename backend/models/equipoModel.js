const pool = require('../db');

exports.getAll = (callback) => {
  pool.query('SELECT * FROM equipos', callback);
};

exports.create = (data, callback) => {
  pool.query('INSERT INTO equipos SET ?', data, callback);
};
