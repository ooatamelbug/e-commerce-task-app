const { Service } = require('feathers-knex');

exports.Orders = class Orders extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'orders'
    });
  }
};
