const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.DB_URL;
//const mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL,{
  //userNewUrlParser:true,
  useUnifiedTopology:true
});
const db = mongoose.connection;
db.on('connected', () => {
  console.log('connected to mongoDB server');
});
db.on('error', (err) => {
  console.log('error occured' + err);
});
db.on('disconnected', () => {
  console.log('mongoDB server disconnected ');
});

module.exports = db;
