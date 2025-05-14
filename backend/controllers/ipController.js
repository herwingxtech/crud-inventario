const ipModel = require('../models/ipModel');

exports.getAll = (req, res) => {
  ipModel.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};

exports.create = (req, res) => {
  ipModel.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'IP creada', id: result.insertId });
  });
};
