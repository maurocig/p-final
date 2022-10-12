module.exports.validateAdmin = (req, res, next) => {
  let isAdmin = true;
  if (!isAdmin) {
    res.json({ error: -1, message: 'Ruta no autorizada' });
    return;
  }
  next();
};
