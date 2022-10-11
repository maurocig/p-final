const express = require('express');
const router = express.Router();
const { newCart } = require('../controllers/cartsController');

router.post('/', newCart);

module.exports = router;
