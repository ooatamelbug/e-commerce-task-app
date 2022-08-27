const { authenticate } = require("@feathersjs/authentication").hooks;
const {
  createSchema,
  options,
  updateSchema,
  idSchema,
} = require("./products.validation");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate("jwt"), validation.form(createSchema, options)],
    update: [
      authenticate("jwt"),
      validation.form(updateSchema, options),
      validation.form(idSchema, options),
    ],
    patch: [authenticate("jwt"), validation.form(updateSchema, options)],
    remove: [authenticate("jwt"), validation.form(idSchema, options)],
  },

  after: {
    all: [],
    find: [],
    get: [],
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
