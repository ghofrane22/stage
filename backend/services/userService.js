const bcrypt = require('bcryptjs');
const sequelize = require('../config/database');
const User = require('../models/User');

exports.findByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

exports.getAll = async () => await User.findAll();

// Note: default user creation handled by migrations/init-db.js
