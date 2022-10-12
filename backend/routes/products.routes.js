const express = require('express');
const router = express.Router();

const {
  getProducts,
  postProducts,
  getProductsId,
  updateProducts,
  deleteProducts,
  notFound,
} = require('../controllers/productsController');
const { validateAdmin } = require('../middleware');

router.get('/', getProducts);
router.post('/', validateAdmin, postProducts);

router.get('/:id', getProductsId);
router.put('/:id', validateAdmin, updateProducts);

router.delete('/:id', validateAdmin, deleteProducts);

module.exports = router;
