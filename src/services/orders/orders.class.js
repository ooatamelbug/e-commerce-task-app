const { Service } = require("feathers-knex");

exports.Orders = class Orders extends Service {
  constructor(options) {
    super({
      ...options,
      name: "orders",
    });
  }

  create(data, param) {
    const { discount, count_product, total_price, user_id } = data;

    const newOrder = {
      discount: discount || 0,
      count_product,
      total_price: total_price - (discount || 0),
      user_id,
      status: "pending",
    };

    return super.create(newOrder, param);
  }
};
