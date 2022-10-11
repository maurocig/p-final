const express = require('express');
const router = express.Router();

const {
  getProducts,
  postProducts,
  getProductsId,
  updateProducts,
  deleteProducts,
} = require('../controllers/productsController');

router.get('/', getProducts);
router.post('/', postProducts);

router.get('/:id', getProductsId);
router.put('/:id', updateProducts);

router.delete('/:id', deleteProducts);

router.get('/carrocerias', (req, res) => {
  res.status(200).json({ message: 'get carrocerias' });
});

router.get('/equipos', (req, res) => {
  res.status(200).json({ message: 'get equipos' });
});

router.get('/accesorios', (req, res) => {
  res.status(200).json({ message: 'get accesorios' });
});

module.exports = router;
