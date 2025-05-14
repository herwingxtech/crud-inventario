const express = require('express');
const app = express();
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const ipRoutes = require('./routes/ipRoutes');
const equipoRoutes = require('./routes/equipoRoutes');
const areaRoutes = require('./routes/areaRoutes');
const empresaRoutes = require('./routes/empresaRoutes');
const authMiddleware = require('./middleware/authMiddleware');

app.use(express.json());

// Rutas públicas
app.use('/api/auth', authRoutes);

// Rutas protegidas
app.use('/api/ips', authMiddleware, ipRoutes);
app.use('/api/equipos', authMiddleware, equipoRoutes);
app.use('/api/areas', authMiddleware, areaRoutes);
app.use('/api/empresas', authMiddleware, empresaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});
