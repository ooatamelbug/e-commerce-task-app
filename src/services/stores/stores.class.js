const { Service } = require('feathers-knex');

exports.Stores = class Stores extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'stores'
    });
  }
};
