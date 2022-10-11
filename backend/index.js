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

// Listen
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
