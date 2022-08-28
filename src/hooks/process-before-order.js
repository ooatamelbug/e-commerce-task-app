// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const {  app, params, method, id } = context;

    const { user } = params;

    // get out the cart of user
    const userCart = (await app
      .service("carts")
      .find({ query: { user_id: user.id } })).data[0];

    // put the required data for process 
    delete userCart.created_at;
    delete userCart.updated_at;
    delete userCart.id;
    context.data = userCart;

    if (method == "remove" || method == "get") {
      const order = await app.service("orders").get(id);
      if (user.id != order.user_id) {
        throw new Error("NOT ALLOW");
      }
    }

    return context;
  };
};
