const { authenticate } = require('@feathersjs/authentication').hooks;
const validation = require("feathers-validate-joi");
const {
  createSchema,
  options,
  updateSchema,
  idSchema,
} = require("./order_details.validation");

const orderCartProducts = require('../../hooks/order-cart-products');

const processOrderDetails = require('../../hooks/process-order-details');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [validation.form(idSchema, options)],
    create: [validation.form(createSchema, options), orderCartProducts()],
    update: [
      validation.form(idSchema, options),
      validation.form(updateSchema, options),
      orderCartProducts()
    ],
    patch: [],
    remove: [validation.form(idSchema, options)]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [processOrderDetails()],
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
