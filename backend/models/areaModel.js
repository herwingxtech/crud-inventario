const pool = require('../db');

exports.getAll = (callback) => {
  pool.query('SELECT * FROM areas', callback);
};

exports.create = (data, callback) => {
  pool.query('INSERT INTO areas SET ?', data, callback);
};
