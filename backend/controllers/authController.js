<<<<<<< HEAD
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res.status(400).json({ message: "Utilisateur existe déjà" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: "Utilisateur créé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user)
      return res.status(400).json({ message: "Utilisateur non trouvé" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Mot de passe incorrect" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
=======
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
>>>>>>> b5160007537f6b502fdbf07e4b39476c72bc53cd
};
