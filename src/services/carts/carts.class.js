const { Service } = require('feathers-knex');

exports.Carts = class Carts extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'carts'
    });
  }
};
