// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, data, method, id, params } = context;
    if(id) {
      if(parseInt(id) != (+id)) {
        throw new Error("id must be int");
      }
    }

    const store = async (storeid) => {
      const store = await app.service("stores").get(storeid);
      if (store.user_id != params.user.id) {
        throw new Error("NOT ALLOW");
      }
    };
    if (method == "update" || method == "create") {
      store(data.store_id);
    } else if (method == "remove") {
      const product = await app.service("products").get(id);
      store(product.store_id);
    }
    return context;
  };
};
