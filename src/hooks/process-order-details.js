// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { app, params, result, method } = context;
    
    const product =  await app.service("products").get(result.data.product_id);

    const afterOrder = {
      ...product,
      quantity: Number(product.quantity) - Number(result.data.quantity)
    }

    const updateProduct =  await app.service("products").update(result.data.product_id, afterOrder, params);
    

    return context;
  };
};
