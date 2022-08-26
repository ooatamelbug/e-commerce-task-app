const { Service } = require('feathers-knex');

exports.Products = class Products extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'products'
    });
  }
};
