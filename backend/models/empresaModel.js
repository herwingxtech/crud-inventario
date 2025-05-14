const pool = require('../db');

exports.getAll = (callback) => {
  pool.query('SELECT * FROM empresas', callback);
};

exports.create = (data, callback) => {
  pool.query('INSERT INTO empresas SET ?', data, callback);
};
