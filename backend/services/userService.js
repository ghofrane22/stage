const bcrypt = require('bcryptjs');
const sequelize = require('../config/database');
const User = require('../models/User');

const ensureDefaultUser = async () => {
  await sequelize.sync();
  const user = await User.findOne({ where: { email: 'agent@example.com' } });
  if (!user) {
    const hashed = await bcrypt.hash('password123', 10);
    await User.create({ email: 'agent@example.com', name: 'Agent Demo', password: hashed });
    console.log('Created default user in DB: agent@example.com / password123');
  }
};

ensureDefaultUser().catch(err => console.error('Error ensuring default user', err));

exports.findByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

exports.getAll = async () => await User.findAll();
