const { authenticate } = require('@feathersjs/authentication').hooks;
const validation = require("feathers-validate-joi");
const {
  createSchema,
  options,
  updateSchema,
  idSchema,
} = require("./cart.validation");

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [validation.form(idSchema, options)],
    create: [validation.form(createSchema, options)],
    update: [validation.form(idSchema, options), validation.form(updateSchema, options)],
    patch: [],
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
