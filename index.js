'use strict';

//dictates where server is being served from (main server functionality)
const server = require('./src/server');

//starts server on designated
server.start(3000);

//sets .env environment variables (port, API keys, etc)
require('dotenv').config();

//configuring connection to mongo
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};

//configuring connection to mongo 
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

