const jwt = require('jsonwebtoken');
const Technicien = require('../models/Technicien');

const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';

module.exports = async (req, res, next) => {
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
  const tech = await Technicien.findById(payload.id);
    if (!tech || !tech.isAdmin) return res.status(403).json({ message: 'Admin only' });
    req.technicien = tech;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
