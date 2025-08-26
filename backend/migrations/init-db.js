const mysql = require('mysql2/promise');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Technicien = require('../models/Technicien');
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;

async function ensureDatabase() {
  
  const conn = await mysql.createConnection({ host: DB_HOST || 'localhost', port: DB_PORT || 3306, user: DB_USER || 'root', password: DB_PASS || '' });
  await conn.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
  await conn.end();
}

async function run() {
  try {
    await ensureDatabase();
    // now sequelize can connect to the DB
    await sequelize.authenticate();
    await sequelize.sync();

    // create default admin technicien
    const adminEmail = 'admin@gmail.com';
    const admin = await Technicien.findOne({ where: { email: adminEmail } });
    if (!admin) {
      const hash = await bcrypt.hash('admin123', 10);
      await Technicien.create({ email: adminEmail, name: 'Admin', password: hash, isAdmin: true });
      console.log('Created default admin', adminEmail);
    }

    // create default agent user
    const agentEmail = 'agent@example.com';
    const agent = await User.findOne({ where: { email: agentEmail } });
    if (!agent) {
      const hash2 = await bcrypt.hash('password123', 10);
      await User.create({ email: agentEmail, name: 'Agent Demo', password: hash2 });
      console.log('Created default user', agentEmail);
    }

  } catch (err) {
    console.error('Migration error', err);
    throw err;
  }
}

module.exports = run;
