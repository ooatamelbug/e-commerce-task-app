const { Service } = require("feathers-knex");

exports.Carts = class Carts extends Service {
  constructor(options) {
    super({
      ...options,
      name: "carts",
    });
  }

  create(data, param) {
    const { userId } = data;

    const newCart = {
      user_id: userId,
      count_product: 0,
      total_price: 0.0,
    };

    return super.create(newCart, param);
  }

  find(param) {
    throw new Error("not allowed url");
  }
};
