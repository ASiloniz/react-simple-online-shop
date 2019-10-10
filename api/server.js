'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/products', (req, res) => {
  return res.json(data.products);
});

app.post('/api/products', (req, res) => {
  let products = [];
  let id = null;
  let cart = JSON.parse(req.body.cart);
  
  if (!cart){
    return res.json(products);
  }

  for (let i = 0; i < data.products.length; i++) {
    id = data.products[i].id.toString();
    if (cart.hasOwnProperty(id)) {
      products.push(data.products[i]);
    }
  }
  
  return res.json(products);
});

const PORT = 5000;

app.listen(PORT);
console.log('API Running on PORT:' + PORT + ': ');