const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const DB_HOST = process.env.DB_HOST || '127.0.0.1';
const DB_PORT = process.env.DB_PORT || '3306';
const DB_NAME = process.env.DB_NAME || 'stage_db';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASS = process.env.DB_PASS || '';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
