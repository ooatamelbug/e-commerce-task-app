const { Service } = require("feathers-knex");

exports.Carts = class Carts extends Service {
  constructor(options) {
    super({
      ...options,
      name: "carts",
    });
  }

  create(data, param) {
    const { user_id } = data;

    const newCart = {
      user_id: user_id,
      count_product: 0,
      total_price: 0.0,
    };
    // console.log(userId)
    console.log(newCart);
    return super.create(newCart, param);
  }
};
