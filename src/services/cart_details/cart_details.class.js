const { Service } = require("feathers-knex");

exports.CartDetails = class CartDetails extends Service {
  constructor(options) {
    super({
      ...options,
      name: "cart_details",
    });
  }

  async create(data, param) {
    const { product_id, cart_id, price_of_one, quantity } = data;

    const productInCart = await super.find({
      query: {
        cart_id,
        product_id,
      },
    });

    let addToCart;
    if (inCart.length > 0) {
      addToCart = {
        ...productInCart[0],
        quantity: productInCart[0].quantity + quantity,
        total_price: productInCart[0].total_price + quantity * price_of_one,
      };
    } else {
      const total = Number(price_of_one) * Number(quantity);

      addToCart = {
        product_id,
        cart_id,
        quantity,
        price_of_one,
        total_price: total,
      };
    }
    return super.create(addToCart, param);
  }
};
