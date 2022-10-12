const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080;
const { errorNotFound } = require('./utils/errors');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// Routers
app.use('/api/products', require('./routes/products.routes'));
app.use('/api/carts', require('./routes/carts.routes'));

// Error responses
app.get('*', (req, res) => {
  const route = req.params[0];
  res.json(errorNotFound(route, 'GET'));
});

app.post('*', (req, res) => {
  const route = req.params[0];
  res.json(errorNotFound(route, 'POST'));
});

app.put('*', (req, res) => {
  const route = req.params[0];
  res.json(errorNotFound(route, 'PUT'));
});

app.delete('*', (req, res) => {
  const route = req.params[0];
  res.json(errorNotFound(route, 'DELETE'));
});

// Listen
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
