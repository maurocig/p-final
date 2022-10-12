const Container = require('../models/Container');
const products = new Container('ProductosIniciales2.json');

const getProducts = async (req, res) => {
  try {
    res.json(await products.getAll());
  } catch (error) {
    console.log(error.message);
  }
};

const postProducts = async (req, res) => {
  const addedProduct = req.body;
  try {
    const date = new Date();
    addedProduct.timestamp = date.toString();
    await products.assignId(addedProduct);
    await products.save(addedProduct);
    res.send(addedProduct);
  } catch (error) {
    console.log(error);
  }
};

const getProductsId = async (req, res) => {
  const { id } = req.params;
  const foundProduct = await products.getById(id);
  res.json(foundProduct);
};

const updateProducts = async (req, res) => {
  const { id } = req.params;
  await products.deleteById(id);
  const updatedProduct = req.body;
  const date = new Date();
  updatedProduct.timestamp = date.toString();
  updatedProduct.id = +id;
  await products.save(updatedProduct);
  res.json(updatedProduct);
};

const deleteProducts = async (req, res) => {
  const { id } = req.params;
  const foundProduct = products.getById(id);
  products.deleteById(id);
  res.json({ message: `Product with ID: ${id} was deleted.` });
};

// const notFound = (req, res) => {
// 	const {}
// 	res.json({ error : -2, description: `ruta ${} método 'y' no implementada`})
// }

module.exports = {
  getProducts,
  postProducts,
  getProductsId,
  updateProducts,
  deleteProducts,
};
