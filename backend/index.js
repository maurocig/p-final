const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// Routers
app.use('/api/products', require('./routes/products.routes'));
app.use('/api/carts', require('./routes/carts.routes'));

app.get('*', (req, res) => {
  const route = req.params[0];
  res.json({
    error: -1,
    message: `Ruta '${route}' método GET no implementada`,
  });
});

app.post('*', (req, res) => {
  const route = req.params[0];
  res.json({
    error: -1,
    message: `Ruta '${route}' método POST no implementada`,
  });
});

app.put('*', (req, res) => {
  const route = req.params[0];
  res.json({
    error: -1,
    message: `Ruta '${route}' método PUT no implementada`,
  });
});

app.delete('*', (req, res) => {
  const route = req.params[0];
  res.json({
    error: -1,
    message: `Ruta '${route}' método DELETE no implementada`,
  });
});

// Listen
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
