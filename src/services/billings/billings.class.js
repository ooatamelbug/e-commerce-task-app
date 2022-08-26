const { Service } = require('feathers-knex');

exports.Billings = class Billings extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'billings'
    });
  }
};
