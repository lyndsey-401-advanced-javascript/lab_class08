'use strict';

const {server} = require('../src/server');
const supergoose = require('./supergoose');
const mockRequest = supergoose(server);

describe('Writing Tests for Products API', () => {
  test('Creating a new product should return a created object', () => {
    const testProduct = {
      name: 'Harry Potter',
      description: 'yer a wizard Harry',
      price: 15,
      category: 'wizardry',
    };

    return mockRequest.post('/api/v1/products')
      .send(testProduct)
      .then(response => {
        expect(response.status).toEqual(201);
        expect(response.body.name).toEqual('Harry Potter');
      });
  });
});

describe('Writing Tests for Categories API', () => {
  test('Creating a new category should return a created object', () => {
    const testCategory = {
      name: 'Fantasy',
      description: 'dragons n such',
      displayed_name: 'Fantasy/SciFi',
    };
  
    return mockRequest.post('/api/v1/products')
      .send(testCategory)
      .then(response => {
        expect(response.status).toEqual(201);
        expect(response.body.name).toEqual('Fantasy');
      });
  });
});

