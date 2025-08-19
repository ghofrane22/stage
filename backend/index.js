const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const sequelize = require('./config/database');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to MySQL');
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('Unable to start server:', err);
    process.exit(1);
  }
};

start();
