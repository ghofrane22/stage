const bcrypt = require('bcryptjs');
const User = require('../../models/User');

exports.register = async (req, res) => {
  const { email, name, password } = req.body || {};
  if (!email || !name || !password) return res.status(400).json({ message: 'Missing fields' });
  try {
    const hashed = await bcrypt.hash(password, 10);
    const created = await User.create({ email, name, password: hashed });
    res.status(201).json({ id: created.id, email: created.email, name: created.name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating user' });
  }
};
