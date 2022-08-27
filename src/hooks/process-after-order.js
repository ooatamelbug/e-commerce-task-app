// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { app, params, result, method } = context;
    const { user } = params;
    
    // get cart data of user auth
    const userCart = await app.service("cart").find({ user_id: user.id })[0];
    // get cart_details based on cart of user id
    const userCartDetails = await app.service("cart_details").find({ cart_id: userCart.id });
    
    // save in order_details the cart Details 
    const addOrderDetails = async (cartDetails) => {
      delete cartDetails.id;
      delete cartDetails.cart_id;
      cartDetails.order_id = result.data.id;
      const createOrder  = await  app.service("order_details").create(cartDetails, params);  
    }
    // create order_details
    const createOrderDetails = await Promise.all(userCartDetails.forEach(addOrderDetails));

    // delete user cart 
    const deleteUserCart = await app.service("cart").remove(userCart.id);
    // recreate User Cart
    const createUserCart = await app.service("cart").create(user.id);

    return context;
  };
};
