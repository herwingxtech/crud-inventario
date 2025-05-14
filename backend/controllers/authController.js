const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');
require('dotenv').config();

exports.login = (req, res) => {
  const { username, password } = req.body;

  userModel.findByUsername(username, (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const user = results[0];
    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) return res.status(401).json({ message: 'Credenciales inválidas' });

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
    res.json({ token });
  });
};
