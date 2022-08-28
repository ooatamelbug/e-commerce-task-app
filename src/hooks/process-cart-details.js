// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data, app, params } = context;
    // get out te cart id of user
    const cart = (await app.service("carts").find({ query: { user_id: params.user.id } }));
    data.cart_id = cart.data[0].id;
    return context;
  };
};
