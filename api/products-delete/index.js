const data = require('../shared/product-data');

module.exports = async function (context, req) {
  const id = req.params.id;
  const product = await data.readProduct(id);
  const name = product.name;

  try {
    const { result } = await data.deleteProduct(id, name);
    context.res.status(200).json(result);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
