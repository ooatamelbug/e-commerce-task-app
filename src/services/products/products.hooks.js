const { authenticate } = require("@feathersjs/authentication").hooks;
const {
  createSchema,
  options,
  updateSchema,
} = require("./products.validation");
const validation = require("feathers-validate-joi");

const processProduct = require("../../hooks/process-product");

const populateProduct = require("../../hooks/populate-product");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate("jwt"),
      validation.form(createSchema, options),
      processProduct(),
    ],
    update: [
      authenticate("jwt"),
      validation.form(updateSchema, options),
      processProduct(),
    ],
    patch: [authenticate("jwt"), validation.form(updateSchema, options)],
    remove: [authenticate("jwt"), processProduct()],
  },

  after: {
    all: [],
    find: [populateProduct()],
    get: [populateProduct()],
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
