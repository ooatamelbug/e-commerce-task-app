const { authenticate } = require('@feathersjs/authentication').hooks;
const validation = require("feathers-validate-joi");
const {
  createSchema,
  options,
  updateSchema,
  idSchema,
} = require("./cart.validation");

const processBeforeOrder = require('../../hooks/process-before-order');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [validation.form(createSchema, options), processBeforeOrder()],
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
