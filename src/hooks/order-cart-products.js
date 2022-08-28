// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data, app, params } = context;

    const product = await app.service("products").get(data.product_id);
    if(product.quantity  < data.quantity) {
      throw new Error("there are not enough quantity");
    }
    
    return context;
  };
};
