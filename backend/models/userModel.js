const pool = require('../db');

exports.findByUsername = (username, callback) => {
  pool.query('SELECT * FROM users WHERE username = ?', [username], callback);
};

exports.create = (user, callback) => {
  pool.query('INSERT INTO users SET ?', user, callback);
};
