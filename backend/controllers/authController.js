const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userService = require('../services/userService');
const technicienService = require('../services/technicienService');

const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

exports.login = async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' });
  // Try Users first
  let user = await userService.findByEmail(email);
  let isTechnicien = false;
  if (!user) {
    // Try techniciens
    user = await technicienService.findByEmail(email);
    isTechnicien = !!user;
  }
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: 'Invalid credentials' });
  const payload = { id: user.id, email: user.email };
  if (isTechnicien && user.isAdmin) payload.isAdmin = true;
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  res.json({ token, user: { id: user.id, email: user.email, name: user.name, isAdmin: user.isAdmin || false, isTechnicien } });
};
