const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_HOST = process.env.MONGO_HOST || '127.0.0.1';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DB = process.env.MONGO_DB || 'stage_db';
const MONGO_USER = process.env.MONGO_USER || '';
const MONGO_PASS = process.env.MONGO_PASS || '';

let uri;
if (MONGO_USER) {
  uri = `mongodb://${MONGO_USER}:${encodeURIComponent(MONGO_PASS)}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
} else {
  uri = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
}

const connect = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  return mongoose;
};

module.exports = { connect, mongoose };
