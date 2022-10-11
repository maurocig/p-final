const express = require('express');
const router = express.Router();
const {
  newCart,
  deleteCart,
  addToCart,
  getProducts,
  removeFromCart,
} = require('../controllers/cartsController');

router.post('/', newCart);

router.delete('/:id', deleteCart);

router.get('/:id/products', getProducts);

router.post('/:id/products/:id_prod', addToCart);
router.delete('/:id/products/:id_prod', removeFromCart);

module.exports = router;
