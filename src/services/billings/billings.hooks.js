const { authenticate } = require('@feathersjs/authentication').hooks;
const validation = require("feathers-validate-joi");
const { createSchema, options, idSchema } = require('./billing.validation')
const processBilling = require('../../hooks/process-billing');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [validation.form(idSchema, options)],
    create: [processBilling(), validation.form(createSchema, options) ],
    update: [],
    patch: [],
    remove: []
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
