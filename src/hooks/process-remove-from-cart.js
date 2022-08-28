// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { app, params, id } = context;

    // get item In Cart details and get the cart id and user of cart
    const itemInCart = await app.service("cart-details").get(id);
    let knexClient = app.get("knexClient");
    const cartOfOwner = await knexClient.select("*").from("carts").where("id", itemInCart.cart_id);
    // authorize to this operation
    if(params.user.id != cartOfOwner[0].user_id) {
      throw new Error("NOT ALLOW");
    }

    return context;
  };
};
