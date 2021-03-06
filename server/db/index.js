const mongoose = require('mongoose');
const path = require('path');
const chalk = require('chalk');
const models = require('./models');
const ENV_VARIABLES = require(path.join(__dirname, '../env'));
const DATABASE_URI = ENV_VARIABLES.DATABASE_URI;
const DATABASE_USER = ENV_VARIABLES.DATABASE_USER;
const DATABASE_PASSWORD = ENV_VARIABLES.DATABASE_PASSWORD;

// Options for connecting to MongoDB
// We can add more later
const options = {
  useMongoClient: true
};

// Replace mongoose's promise library using bluebird's
mongoose.Promise = require('bluebird');
console.log(chalk.yellow('Opening connection to MongoDB', DATABASE_URI));

const db = mongoose.connect(DATABASE_URI, options);
module.exports = db;

const con = mongoose.connection;
con.on('error', console.error.bind(console, 'mongodb connection error:'));
