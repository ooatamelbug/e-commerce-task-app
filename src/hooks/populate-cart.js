// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, param, result, method } = context;

    const getpopulateProduct = async (cartDetails) => {
      const product = await app
        .service("products")
        .get({ id: cartDetails.id }, param);
      return {
        ...cartDetails,
        product
      };
    };

    const getpopulateCart = async (cart) => {
      const user = await app.service("users").get(cart.user_id, param);
      const cart_details = await app
        .service("cart-details")
        .find({ cart_id: cart.id });
      return {
        ...cart,
        user,
        cart_details: {
           ...(await Promise.all(cart_details.map(getpopulateProduct))),
        },
      };
    };

    if (method === "get") {
      result.data = await getpopulateCart(result);
    }
    return context;
  };
};
