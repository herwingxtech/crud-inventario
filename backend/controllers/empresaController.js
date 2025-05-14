const empresaModel = require('../models/empresaModel');

exports.getAll = (req, res) => {
  empresaModel.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};

exports.create = (req, res) => {
  empresaModel.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Empresa creada', id: result.insertId });
  });
};
