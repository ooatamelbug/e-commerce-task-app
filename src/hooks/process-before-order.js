// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data, app, params } = context;

    const { user } = params;

   

    const userCart = await app.service("cart").find({ user_id: user.id })[0];
    const userCartDetails = await app.service("cart_details").find({ cart_id: userCart.id });
    const createOrder  = await  app.service("order").create(userCart, params);
    const allDetails = userCartDetails.map(detail => {
      return {
        ...detail,
        order_id: createOrder.id
      }
    })
    const addOrderDetails = async (cartDetails) => {
      delete cartDetails.id;
      delete cartDetails.cart_id;
      cartDetails.order_id = cartDetails.order_id;
      const createOrder  = await  app.service("order_details").create(cartDetails, params);  
    }
    const createOrderDetails = await Promise.all(allDetails.forEach(addOrderDetails));
       
    return context;
  };
};
