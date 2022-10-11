const Container = require('../models/Container');
const carts = new Container('Carts.json');
const products = new Container('ProductosIniciales2.json');
const { addTimestamp } = require('../utils/addTimestamp');

class Cart {
  constructor(id, timestamp) {
    this.id = id;
    this.timestamp = timestamp;
    this.products = [];
  }
}

const newCart = async (req, res) => {
  const cart = new Cart();
  await carts.assignRandomId(cart);
  addTimestamp(cart);
  await carts.save(cart);
  res.json({ id: cart.id });
};

const deleteCart = async (req, res) => {
  const { id } = req.params;
  await carts.deleteById(id);
  res.json({ message: `Product with ID ${id} was deleted succesfully` });
};

const getProducts = async (req, res) => {
  const { id, prod_id: productId } = req.params;
  const cart = await carts.getById(id);
  res.json(cart.products);
};

const addToCart = async (req, res) => {
  const { id } = req.params;
  const cart = await carts.getById(id);
  const { id_prod: productId } = req.params;
  const product = await products.getById(productId);
  const newCart = { ...cart };
  newCart.products.push(product);
  carts.update(cart, newCart);
  res.json(newCart);
};

const removeFromCart = async (req, res) => {
  const { id, id_prod: productId } = req.params;
  const cart = await carts.getById(id);
  const newCart = { ...cart };
  newCart.products = newCart.products.filter(
    (product) => product.id !== +productId
  );
  await carts.update(cart, newCart);
  res.json(newCart);
};

module.exports = {
  newCart,
  deleteCart,
  getProducts,
  addToCart,
  removeFromCart,
};
