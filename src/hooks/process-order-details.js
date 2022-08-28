// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, params, result } = context;
    // get out product by id
    const product = await app.service("products").get(result.product_id);

    // put the required data for process 
    delete product.id;
    delete product.store;
    delete product.created_at;
    delete product.updated_at;
    const afterOrder = {
      ...product,
      quantity: Number(product.quantity) - Number(result.quantity),
    };
    // update products 
    await app.service("products").patch(result.product_id, afterOrder, params);

    return context;
  };
};
