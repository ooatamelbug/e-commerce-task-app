// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { app, params, result, method } = context;
    const getStore = async product => {
      const store = await app.service("stores").get(product.store_id);
      return {
        ...product,
        store
      }
    }


    if(method == "find") {
      result.data = await Promise.all(result.data.map(getStore))
    } else {
      context.result = await getStore(result)
    }
    return context;
  };
};
