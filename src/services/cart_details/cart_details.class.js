const { Service } = require("feathers-knex");

exports.CartDetails = class CartDetails extends Service {
  constructor(options, app) {
    super({
      ...options,
      name: "cart_details",
    });
    this.app = app;
  }

  async create(data, param) {
    const { product_id, cart_id, price_of_one, quantity } = data;
    const productInCart = await this.find({
      query: {
        cart_id,
        product_id,
      },
    });

    let addToCart;
    if (productInCart.data.length > 0) {
      addToCart = {
        ...productInCart.data[0],
        quantity: productInCart.data[0].quantity + quantity,
        total_price:
          productInCart.data[0].total_price + quantity * price_of_one,
      };
      return super.patch(productInCart.data[0].id, addToCart, param);
    } else {
      const total = Number(price_of_one) * Number(quantity);

      addToCart = {
        product_id,
        cart_id,
        quantity,
        price_of_one,
        total_price: total,
      };
      return super.create(addToCart, param);
    }
  }
};
