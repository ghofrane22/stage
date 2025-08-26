const technicienService = require('../services/technicienService');

exports.create = async (req, res) => {
  const { email, name, password, isAdmin } = req.body || {};
  if (!email || !name || !password) return res.status(400).json({ message: 'Missing fields' });
  try {
    const created = await technicienService.createTechnicien({ email, name, password, isAdmin });
    res.status(201).json({ id: created.id, email: created.email, name: created.name, isAdmin: created.isAdmin });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating technicien' });
  }
};
