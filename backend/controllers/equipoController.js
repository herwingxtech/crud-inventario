const equipoModel = require('../models/equipoModel');

exports.getAll = (req, res) => {
  equipoModel.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};

exports.create = (req, res) => {
  equipoModel.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Equipo creado', id: result.insertId });
  });
};
