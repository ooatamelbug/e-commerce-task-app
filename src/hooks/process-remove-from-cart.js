// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { app, params, id } = context;
    const itemInCart = await app.service("cart-details").get(id);
    let knexd = app.get("knexClient");
    const cartOfOwner = await knexd.select("*").from("carts").where("id", itemInCart.cart_id);
    
    if(params.user.id != cartOfOwner[0].user_id) {
      throw new Error('NOT ALLOW')
    }

    return context;
  };
};
