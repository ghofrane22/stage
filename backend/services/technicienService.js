const bcrypt = require('bcryptjs');
const sequelize = require('../config/database');
const Technicien = require('../models/Technicien');

const ensureAdmin = async () => {
  await sequelize.sync();
  const adminEmail = 'admin@example.com';
  const existing = await Technicien.findOne({ where: { email: adminEmail } });
  if (!existing) {
    const hashed = await bcrypt.hash('admin123', 10);
    await Technicien.create({ email: adminEmail, name: 'Admin', password: hashed, isAdmin: true });
    console.log('Created default admin:', adminEmail, '/ admin123');
  }
};

ensureAdmin().catch(err => console.error('Error ensuring admin', err));

exports.createTechnicien = async ({ email, name, password, isAdmin = false }) => {
  const hashed = await bcrypt.hash(password, 10);
  return await Technicien.create({ email, name, password: hashed, isAdmin });
};

exports.findByEmail = async (email) => await Technicien.findOne({ where: { email } });
exports.getAll = async () => await Technicien.findAll();
