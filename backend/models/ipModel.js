const pool = require('../db');

exports.getAll = (callback) => {
  pool.query('SELECT * FROM ips', callback);
};

exports.create = (data, callback) => {
  pool.query('INSERT INTO ips SET ?', data, callback);
};
