const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017';

async function connectToMongo() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('Connected to test successfully');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

module.exports = connectToMongo;