'use strict';

const express = require('express');
const categoriesRouter = express.Router();

const Categories = require('./models/categories');
const categories = new Categories();

// Routes
categoriesRouter.get('/api/v1/categories', getCategories);  //route and callback
categoriesRouter.create('/api/v1/categories', postCategories);
categoriesRouter.get('/api/v1/categories/:id', getCategory);
categoriesRouter.update('/api/v1/categories/:id', putCategories);
categoriesRouter.delete('/api/v1/categories/:id', deleteCategories);

// ROUTE HANDLER FUNCTIONS
function getCategories(request,response,next) {
  // expects an array of object to be returned from the model
  categories.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}
  
function getCategory(request,response,next) {
  // expects an array with the one matching record from the model
  categories.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}
  
function postCategories(request,response,next) {
  // expects the record that was just added to the database
  categories.post(request.body)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}
  
  
function putCategories(request,response,next) {
  // expects the record that was just updated in the database
  categories.put(request.params.id, request.body)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}
  
function deleteCategories(request,response,next) {
  // Expects no return value (resource was deleted)
  categories.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}
  
module.exports = categoriesRouter;
