const { Service } = require("feathers-knex");

exports.OrderDetails = class OrderDetails extends Service {
  constructor(options) {
    super({
      ...options,
      name: "order_details"
    });
  }

  create(data, params) {
    const { quantity, price_of_one, total_price, order_id, product_id } = data;
    const newOrderDetails = {
      quantity,
      product_id,
      order_id,
      price_of_one,
      total_price: (quantity * price_of_one ) || total_price
    };
    return super.create(newOrderDetails, params);
  }
};
