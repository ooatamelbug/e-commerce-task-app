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
    get: [],
    create: [validation.form(createSchema, options)],
    update: [validation.form(updateSchema, options), validation.form(idSchema, options)],
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
