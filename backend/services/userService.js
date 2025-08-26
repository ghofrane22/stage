const User = require('../models/User');

exports.findByEmail = async (email) => {
  return await User.findOne({ email });
};

exports.getAll = async () => await User.find();

// Note: default user creation handled by migrations/init-db.js
