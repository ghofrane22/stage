const { connect } = require('../config/mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Technicien = require('../models/Technicien');

async function run() {
  try {
    await connect();

    // create default admin technicien
    const adminEmail = 'admin@gmail.com';
    const admin = await Technicien.findOne({ email: adminEmail });
    if (!admin) {
      const hash = await bcrypt.hash('admin123', 10);
      await Technicien.create({ email: adminEmail, name: 'Admin', password: hash, isAdmin: true });
      console.log('Created default admin', adminEmail);
    }

    // create default agent user
    const agentEmail = 'agent@example.com';
    const agent = await User.findOne({ email: agentEmail });
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
