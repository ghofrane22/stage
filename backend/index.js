const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const technicienRoutes = require('./routes/technicien');
const sequelize = require('./config/database');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/technicien', technicienRoutes);
const usersRoutes = require('./routes/users');
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 4000;

const runMigrations = require('./migrations/init-db');

const start = async () => {
  try {
    await runMigrations();
    console.log('DB initialized');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('Unable to start server:', err);
    process.exit(1);
  }
};

start();
