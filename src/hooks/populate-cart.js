// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, params, result, method } = context;
    // auth user for do this opert
    if(params.user.id != result.user_id) {
      throw new Error("NOT ALLOW");
    }

    // get the Product Details 
    const getpopulateProduct = async (cartDetails) => {
      const product = await app.service("products").get(cartDetails.product_id);
      return {
        ...cartDetails,
        product,
      };
    };

    // get the cart and cart Details 
    const getpopulateCart = async (cart) => {
      const user = await app.service("users").get(cart.user_id);
      const cart_details = await app
        .service("cart-details")
        .find({ query: { cart_id: cart.id } });
      return {
        ...cart,
        user,
        cart_details: {
          ...(await Promise.all(cart_details.data.map(getpopulateProduct))),
        },
      };
    };

    if (method == "get") {
      result.data = await getpopulateCart(result);
    }
    
    return context;
  };
};
