module.exports.errorNotFound = (route, method) => {
  return {
    error: -1,
    message: `Ruta '${route}' método ${method} no implementada`,
  };
};

// module.exports.errorHandler = (req, res) => {
//   const route = req.params[0];
//   res.json(errorNotFound(route));
// };
