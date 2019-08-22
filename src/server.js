'use strict';

// 3rd Party Resources
//require express framework
const express = require('express');
//cross origin resource sharing 
const cors = require('cors');
//https logging middleware for node
const morgan = require('morgan'); 


const categoriesRouter = require('../src/lib/categories-modular');
const productsRouter = require('./lib/products-modular');

// Esoteric Resources
const errorHandler = require( './middleware/error');
//500 error path
const notFound = require( './middleware/404' );
//404 error path

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(categoriesRouter); 
app.use(productsRouter); 

// Catchalls
app.use(notFound);
app.use(errorHandler);


module.exports = {};

module.exportsserver = app; 

module.exports.start = port => {
  const PORT = port || process.env.PORT || 3000;

  app.listen(PORT, () => console.log(`Server is up on port${port}`));
};
