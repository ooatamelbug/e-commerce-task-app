// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, params, result } = context;
    const { user } = params;

    // get cart data of user auth
    const userCart = (await app.service("carts").find({ query: { user_id: user.id } })).data[0];
    // get cart_details based on cart of user id
    const userCartDetails = await app
      .service("cart-details")
      .find({ query: { cart_id: userCart.id } });

    // save in order_details the cart Details
    const addOrderDetails = async (cartDetails) => {
      const newOrderDetails = {
        quantity: cartDetails.quantity,
        price_of_one: cartDetails.price_of_one,
        order_id: result.id,
        product_id: cartDetails.product_id
      };
      await app
        .service("order-details")
        .create(newOrderDetails, params);
    };
    // create order_details
    await Promise.all(
      userCartDetails.data.map(addOrderDetails)
    );

    // delete user cart
    await app.service("carts").remove(userCart.id);

    // recreate User Cart
    await app.service("carts").create({ user_id :user.id }, params);

    return context;
  };
};
