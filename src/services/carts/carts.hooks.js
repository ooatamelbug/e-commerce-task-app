const { authenticate } = require("@feathersjs/authentication").hooks;
const validation = require("feathers-validate-joi");
const { createSchema, options, updateSchema } = require("./cart.validation");

const populateCart = require("../../hooks/populate-cart");

module.exports = {
  before: {
    all: [],
    find: [authenticate("jwt")],
    get: [authenticate("jwt")],
    create: [validation.form(createSchema, options)],
    update: [authenticate("jwt"), validation.form(updateSchema, options)],
    patch: [authenticate("jwt"), validation.form(updateSchema, options)],
    remove: [authenticate("jwt")],
  },

  after: {
    all: [],
    find: [],
    get: [populateCart()],
    create: [],
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
