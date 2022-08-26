const { Service } = require('feathers-knex');

exports.OrderDetails = class OrderDetails extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'order_details'
    });
  }
};
