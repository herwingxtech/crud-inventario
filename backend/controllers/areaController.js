const areaModel = require('../models/areaModel');

exports.getAll = (req, res) => {
  areaModel.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};

exports.create = (req, res) => {
  areaModel.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Área creada', id: result.insertId });
  });
};
