const { authenticate } = require("@feathersjs/authentication").hooks;
const validation = require("feathers-validate-joi");
const { createSchema, options, updateSchema } = require("./store.validation");

const proccessStore = require("../../hooks/proccess-store");

const processBeforeRequest = require("../../hooks/process-before-request");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate("jwt"),
      processBeforeRequest(),
      validation.form(createSchema, options),
    ],
    update: [
      authenticate("jwt"),
      processBeforeRequest(),
      validation.form(updateSchema, options),
    ],
    patch: [
      authenticate("jwt"),
      processBeforeRequest(),
      validation.form(updateSchema, options),
    ],
    remove: [authenticate("jwt"), processBeforeRequest()],
  },

  after: {
    all: [],
    find: [proccessStore()],
    get: [proccessStore()],
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
