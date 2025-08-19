const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userService = require('../services/userService');

const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

exports.login = async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' });
  const user = await userService.findByEmail(email);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
};
