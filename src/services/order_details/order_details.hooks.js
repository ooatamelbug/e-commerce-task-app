const { authenticate } = require("@feathersjs/authentication").hooks;
const validation = require("feathers-validate-joi");
const {
  createSchema,
  options,
  updateSchema,
} = require("./order_details.validation");

const orderCartProducts = require("../../hooks/order-cart-products");

const processOrderDetails = require("../../hooks/process-order-details");

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [validation.form(createSchema, options), orderCartProducts()],
    update: [validation.form(updateSchema, options), orderCartProducts()],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [processOrderDetails()],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
