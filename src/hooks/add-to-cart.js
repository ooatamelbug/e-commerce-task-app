// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, params, result } = context;

    // get out cart details by cart_id id
    const productOfCart = await app
      .service("cart-details")
      .find({ query: { cart_id: result.cart_id } });

    // sum of all total price of  products in carts
    const totalAmount = productOfCart.data.reduce((accumulator, row) => {
      return accumulator + row.total_price;
    }, 0);

    // update cart with data after add new item in cart or remove 
    await app.service("carts").patch(
      result.cart_id,
      {
        count_product: productOfCart.data.length,
        total_price: totalAmount,
      },
      params
    );
    return context;
  };
};
