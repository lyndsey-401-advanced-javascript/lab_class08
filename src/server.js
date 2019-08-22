'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); //https logging middleware for node


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

//server starting code from today 
module.exports = {};

module.exportsserver = app; 

module.exports.start = port => {
  const PORT = port || process.env.PORT || 3000;

  app.listen(PORT, () => console.log(`Server is up on port${port}`));
};
