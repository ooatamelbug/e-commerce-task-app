const { authenticate } = require('@feathersjs/authentication').hooks;
const validation = require("feathers-validate-joi");
const {
  createSchema,
  options,
  updateSchema,
  idSchema,
} = require("./cart_details.validation");

const orderCartProducts = require('../../hooks/order-cart-products');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [validation.form(createSchema, options), orderCartProducts()],
    update: [
      validation.form(updateSchema, options),
      validation.form(idSchema, options),
      orderCartProducts()
    ],
    patch: [validation.form(updateSchema, options), validation.form(idSchema, options)],
    remove: [validation.form(idSchema, options)]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
