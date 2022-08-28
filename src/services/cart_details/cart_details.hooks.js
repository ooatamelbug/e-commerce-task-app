const { authenticate } = require("@feathersjs/authentication").hooks;
const validation = require("feathers-validate-joi");
const {
  createSchema,
  options,
  updateSchema,
} = require("./cart_details.validation");

const orderCartProducts = require("../../hooks/order-cart-products");

const addToCart = require("../../hooks/add-to-cart");

const processCartDetails = require("../../hooks/process-cart-details");

const processRemoveFromCart = require("../../hooks/process-remove-from-cart");

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [
      processCartDetails(),
      validation.form(createSchema, options),
      orderCartProducts(),
    ],
    update: [
      processCartDetails(),
      validation.form(updateSchema, options),
      orderCartProducts(),
    ],
    patch: [processCartDetails(), validation.form(updateSchema, options)],
    remove: [processRemoveFromCart()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [addToCart()],
    update: [addToCart()],
    patch: [addToCart()],
    remove: [addToCart()],
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
