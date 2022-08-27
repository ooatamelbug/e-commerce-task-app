// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { app, params, result, method } = context;

    const getProduct = async orderDetail => {
      const product = await app.service("products").get(orderDetail.product_id);
      return {
        ...orderDetail,
        product
      }
    }

    const getOrder = async order => {
      const user = await app.service("users").get(order.user_id);
      const orderDetails = await app.service("order_details").get(order.user_id);
      return {
        ...order,
        user,
        orderDetails: await Promise.all(orderDetails.map(orderDetail))
      }
    }

    if(method == "find") {
      result.data = await Promise.all(result.data.map(getOrder))
    } else {
      context.result = await getOrder(result)
    }

    return context;
  };
};
