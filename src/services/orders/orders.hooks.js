const { authenticate } = require("@feathersjs/authentication").hooks;
const validation = require("feathers-validate-joi");
const { createSchema, options, updateSchema } = require("./order.validation");

const processBeforeOrder = require("../../hooks/process-before-order");

const processAfterOrder = require("../../hooks/process-after-order");

const populateOrder = require("../../hooks/populate-order");

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [processBeforeOrder(), validation.form(createSchema, options)],
    update: [validation.form(updateSchema, options)],
    patch: [validation.form(updateSchema, options)],
    remove: [],
  },

  after: {
    all: [],
    find: [populateOrder()],
    get: [populateOrder()],
    create: [processAfterOrder()],
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
