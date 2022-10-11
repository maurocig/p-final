const express = require('express');
const router = express.Router();
const {
  newCart,
  deleteCart,
  addToCart,
} = require('../controllers/cartsController');

router.post('/', newCart);
router.delete('/:id', deleteCart);
router.post('/:id/products/:id_prod', addToCart);

module.exports = router;
