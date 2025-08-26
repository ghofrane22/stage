const bcrypt = require('bcryptjs');
const Technicien = require('../models/Technicien');

exports.createTechnicien = async ({ email, name, password, isAdmin = false }) => {
  const hashed = await bcrypt.hash(password, 10);
  return await Technicien.create({ email, name, password: hashed, isAdmin });
};

exports.findByEmail = async (email) => await Technicien.findOne({ email });
exports.getAll = async () => await Technicien.find();

// Note: default admin creation is handled by migrations/init-db.js at startup
