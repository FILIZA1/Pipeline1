// import dependencies
const mongoose = require('mongoose');

const Tile = require('./tile');

const connectDb = () => {
  return mongoose.connect(process.env.MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
};

const models = { Tile };

module.exports = {connectDb, models};