const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/adminAuth');
const technicienController = require('../controllers/technicienController');

// Admin-only: create technicien
router.post('/', adminAuth, technicienController.create);

module.exports = router;
