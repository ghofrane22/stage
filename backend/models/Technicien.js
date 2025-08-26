const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Technicien = sequelize.define('Technicien', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  name: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  isAdmin: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
}, {
  tableName: 'Techniciens',
  timestamps: true
});

module.exports = Technicien;
