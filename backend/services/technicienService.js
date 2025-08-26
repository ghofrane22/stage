const bcrypt = require('bcryptjs');
const sequelize = require('../config/database');
const Technicien = require('../models/Technicien');

exports.createTechnicien = async ({ email, name, password, isAdmin = false }) => {
  const hashed = await bcrypt.hash(password, 10);
  return await Technicien.create({ email, name, password: hashed, isAdmin });
};

exports.findByEmail = async (email) => await Technicien.findOne({ where: { email } });
exports.getAll = async () => await Technicien.findAll();

// Note: default admin creation is handled by migrations/init-db.js at startup
