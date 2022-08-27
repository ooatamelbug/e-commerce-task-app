const { Service } = require('feathers-knex');

exports.CartDetails = class CartDetails extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'cart_details'
    });
  }

  create(data, param) {
    const { product_id, cart_id, price_of_one, quantity } = data;

    const total = Number(price_of_one) * Number(quantity);

    const addToCart = {
      product_id,
      cart_id,
      quantity,
      price_of_one,
      total_price: total
    };

    return super.create(addToCart, param);
  }

  find(param) {
    if(!param.cart_id) {
      return super.find();
    } else {
      return super.knex.select("*").from("cart-details").where("cart_id = ?", param.cart_id)
    }
  }
};
