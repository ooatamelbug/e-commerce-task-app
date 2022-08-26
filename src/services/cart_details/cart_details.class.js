const { Service } = require('feathers-knex');

exports.CartDetails = class CartDetails extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'cart_details'
    });
  }
};
